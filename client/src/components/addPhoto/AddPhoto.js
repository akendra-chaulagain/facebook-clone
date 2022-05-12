import React from "react";
import "./AddPhoto.css";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { createPost, getUserInfo } from "../../redux/apicalls";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AddPhoto = () => {
  // user
  const user = useSelector((state) => state.user.currentUser);
  const userId = user._id;
  const { isFetching } = useSelector((state) => state.post);

  // user info
  const dispatch = useDispatch();
  useEffect(() => {
    getUserInfo(dispatch);
  }, [dispatch]);
  const info = useSelector((state) =>
    state.info.infos.find((info) => info.userId === user._id)
  );

  // preview profile iamges before uploading
  const [image, setImage] = useState(null);
  const [selectImagesProfile, setSelectImagesProfile] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectImagesProfile(event.target.files[0]);
    }
  };

  // usestate for post
  const [progress, setProgress] = useState();
  const [desc, setDesc] = useState("");
  const handleSubmitData = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + selectImagesProfile.name;
    const Storage = getStorage(app);
    const storageRef = ref(Storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, selectImagesProfile);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = "loading...";
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            setProgress(progress);
            break;
          case "running":
            setProgress(progress);
            break;
          default:
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const post = {
            desc,
            userId,
            img: downloadURL,
          };
          createPost(post, dispatch);
        });
      }
    );
  };

  return (
    <>
      <div className="container-fluid addPhoto">
        <form className="row addphotoWrapper">
          <div className="addPhotoTitle">
            <p>Create Post</p>
            {/* whwn click render to home page */}
            <Link className="link" to="/">
              <div className="addPhotoIcon">
                <CloseIcon />
              </div>
            </Link>
          </div>
          <hr />
          {/* profileInfo */}
          <div className="UserAddProfileIg">
            <img
              className="img-fluid"
              src={!info?.profilePic ? "../images/avtar.jpg" : info?.profilePic}
              alt="pp_img"
            />
            <span>{user.firstname + " " + user.lastname}</span>
          </div>
          {/* whats on your mind */}
          <div className="addPhotofeed ">
            <textarea
              type="text"
              name="desc"
              onChange={(e) => setDesc(e.target.value)}
              placeholder={`Whats's on your mind, ${user.firstname}?`}
            />
          </div>
          {/* add photo video box */}
          <div className="addphotoBox">
            <div className="addPhotoIconphoto">
              <label htmlFor="file">
                <PhotoLibraryIcon style={{ fontSize: 28 }} />
                <input
                  type="file"
                  id="file"
                  name="img"
                  style={{ display: "none" }}
                  // onChange={(e) => setSelectImages(e.target.files[0])}
                  onChange={onImageChange}
                />
              </label>
            </div>
            <div className="addPhotoIconText">
              <p>Add Photos/Videos</p>
              {/* <input type="file" id="file" style={{ display: "none" }} /> */}
              <img src={image} alt="" />
            </div>
          </div>
          {/* post button */}
          <div className="postButton">
            <button onClick={handleSubmitData} disabled={isFetching}>
              Post
            </button>
            <br />
            <p>{progress}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPhoto;
