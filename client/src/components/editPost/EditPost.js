import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./EditPost.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { updatePosts } from "../../redux/apicalls";
import Loading from "../Loading/Loading";

const EditPost = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const isLoading = useSelector((state) => state.post.isLoading);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [editData, seteEditData] = useState({});
  const [didMount, setDidMount] = useState(false);

  //   get post data according to id which is present in url
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get("/posts/find/" + id);
        seteEditData(res.data);
        setDidMount(true);
      } catch (error) {
        console.log("unable to get user id data" + error);
      }
    };
    getUserData();
    return () => setDidMount(false);
  }, [id]);

  
  //   usestate  for update
  const [desc, setDesc] = useState(editData.desc);
  const [selectImage, setSelectImages] = useState(editData.img);

  //   update user (firebase is used to save photo )
  const handleUpdate = (e) => {
    e.preventDefault();
    const fileName = new Date().toDateString() + selectImage.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, "images/" + fileName);
    const uploadTask = uploadBytesResumable(storageRef, selectImage);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log("firebase error" + error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const data = {
            desc,
            img: downloadURL,
          };
          updatePosts(id, data, dispatch);
        });
      }
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container-fluid editPost">
          <form className="row editPostWrapper">
            <div className="editPostTitle">
              <p>Edit Post</p>
              {/* whwn click render to home page */}
              <Link className="link" to={`/user/${user._id}`}>
                <div className="editPostIcon">
                  <CloseIcon />
                </div>
              </Link>
            </div>
            <hr />
            <div className="editPostfeed ">
              <textarea
                type="text"
                name="desc"
                defaultValue={editData.desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            {/* add photo video */}
            <div className="editPostBox">
              <div className="editPostIconphoto">
                {/* select photo from gallery */}
                <label htmlFor="file">
                  <PhotoLibraryIcon style={{ fontSize: 28 }} />
                  <input
                    type="file"
                    id="file"
                    name="img"
                    style={{ display: "none" }}
                    onChange={(e) => setSelectImages(e.target.files[0])}
                  />
                </label>
              </div>
              <div className="editPostIconText">
                <p>Add Photos/Videos</p>
              </div>
            </div>
            {/* post button */}
            <div className="postButton">
              <button onClick={handleUpdate}>Edit post</button>
              <br />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditPost;
