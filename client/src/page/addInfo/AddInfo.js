import React from "react";
// import "./Addinfo.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createInfo } from "../../redux/apicalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

const Addinfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const user = useSelector((state) => state.user.currentUser.others);

  // update user info
  const [inputes, setInputes] = useState({
    userId: path,
    study: "",
    address: "",
    jobs: "",
    relationship: "",
    whatsapp: "",
    bio: "",
    insta: "",
  });
  const onAddInfo = (e) => {
    e.preventDefault();
    setInputes({ ...inputes, [e.target.name]: e.target.value });
    createInfo(dispatch, inputes);
    navigate(`/user/${user._id}`);
  };

  const handleUserUpdate = () => {};

  // preview profile iamges before uploading
  const [image, setImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectImagesProfile(event.target.files[0]);
    }
  };

  //  user's profile picture
  const [selectImagesProfile, setSelectImagesProfile] = useState(null);
  const [progress, setProgress] = useState();
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
        const progress = "updating...";
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
          const data = {
            profilePic: downloadURL,
            userId: path,
          };
          createInfo(dispatch, data);
          navigate(`/user/${user._id}`);
          alert("profile photo added..");
        });
      }
    );
  };

  // preview cover iamges before uploading
  const [coverImage, setCoverimage] = useState(null);
  const onImageChangeCover = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCoverimage(URL.createObjectURL(event.target.files[0]));
      setSelectImageCover(event.target.files[0]);
    }
  };

  //  user's cover images
  const [selectImageCover, setSelectImageCover] = useState(null);
  const [progressUploading, setProgressUploading] = useState();
  const handleSubmitDataCover = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + selectImageCover.name;
    const Storage = getStorage(app);
    const storageRef = ref(Storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, selectImageCover);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressUploading = "updating...";
        setProgressUploading(progress);
        switch (snapshot.state) {
          case "paused":
            setProgressUploading(progressUploading);
            break;
          case "running":
            setProgressUploading(progressUploading);
            break;
          default:
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const data = {
            coverPic: downloadURL,
            userId: path,
          };
          createInfo(dispatch, data);
          alert("cover photo updated..");
        });
      }
    );
  };

  return (
    <>
      <div className="editContainer">
        <div className="editWrapper">
          {/* edit profile headers */}
          <div className="editheadertext">
            <h1>Edit Profile</h1>
            <Link className="link" to={`/user/${user._id}`}>
              <i className="fa-solid fa-xmark"></i>
            </Link>
          </div>
          <hr />
          {/* edit profile picture */}
          <div className="editProfilePictureContainer">
            <div className="editProfileWrapper">
              <h3>profile Picture</h3>
              {/* edit profile img(select images from the device) */}
              <label htmlFor="file">
                <p>select</p>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  name="profilePic"
                  onChange={onImageChange}
                />
              </label>
            </div>

            <img
              src={!image ? "../images/avtar.jpg" : image}
              alt="profilePic"
            />
            <div className="saveButtonP">
              <p className="text-center" onClick={handleSubmitData}>
                save
              </p>
              <h6 className="text-center">{progress}</h6>
            </div>
          </div>

          <hr />
          <hr />
          {/* edit cover img */}
          <div className="editcoverPictureContainer">
            <div className="editcoverPicWrapper">
              <h3>Cover Photo</h3>
              {/* edit cover img(select images from the device) */}
              <label htmlFor="files">
                <p>select cover</p>
                <input
                  type="file"
                  id="files"
                  style={{ display: "none" }}
                  name="coverPic"
                  onChange={onImageChangeCover}
                />
              </label>
            </div>
            {/* cover pic */}
            <img
              src={!coverImage ? "../images/avtar.jpg" : coverImage}
              alt="cover_img"
            />
            <div className="saveButtonP">
              <p className="text-center" onClick={handleSubmitDataCover}>
                save
              </p>
              <h6 className="text-center">{progressUploading}</h6>
            </div>
          </div>
          <hr />
          <hr />

          {/* edit bio */}
          <div className="editBioDesc">
            <h3>Bio</h3>
            <textarea
              type="text"
              name="bio"
              //   onChange={(e) => setBio(e.target.value)}
              onChange={onAddInfo}
            />
          </div>

          {/* edit info */}
          <div className="editInfoContainer">
            <h3>Customize your intro</h3>
            <form className="inputBoxes">
              {/* education */}
              <div className="inputBoxItem">
                <label htmlFor="">Education</label>
                <br />
                <input
                  type="text"
                  name="study"
                  //   onChange={(e) => setStudy(e.target.value)}
                  onChange={onAddInfo}
                />
              </div>
              {/* address */}
              <div className="inputBoxItem">
                <label htmlFor="">Address</label>
                <br />
                <input type="text" name="address" onChange={onAddInfo} />
              </div>
              {/* jobs */}
              <div className="inputBoxItem">
                <label htmlFor="">Jobs</label>
                <br />
                <input
                  type="text"
                  name="job"
                  //   onChange={(e) => setJobs(e.target.value)}
                  onChange={onAddInfo}
                />
              </div>
              {/* relationship */}
              <div className="inputBoxItem">
                <label htmlFor="">Relationship</label>
                <br />
                <input
                  type="text"
                  name="relationship"
                  //   onChange={(e) => setRealationship(e.target.value)}
                  onChange={onAddInfo}
                />
              </div>
              {/* hobbies */}
              <div className="inputBoxItem">
                <label htmlFor="">whatsApp</label>
                <br />
                <input
                  type="number"
                  name="whatsapp"
                  //   onChange={(e) => setWhatsApp(e.target.value)}
                  onChange={onAddInfo}
                />
              </div>
              {/* insta */}
              <div className="inputBoxItem">
                <label htmlFor="">Instagram</label>
                <br />
                <input
                  type="text"
                  name="insta"
                  //   onChange={(e) => setInsta(e.target.value)}
                  onChange={onAddInfo}
                />
              </div>
            </form>
          </div>

          {/* save info button */}
          <div className="saveInfoButton">
            <button onClick={handleUserUpdate}>Save info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addinfo;
