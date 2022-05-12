import React from "react";
import "./Edit.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { updateInfoUser } from "../../redux/apicalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const user = useSelector((state) => state.user.currentUser);

  // get user according to user id given in url
  const [userInfoData, setuserInfoData] = useState([]);
  useEffect(() => {
    const getUserPostData = async () => {
      try {
        const res = await axios.get("/info/find/" + path);
        setuserInfoData(res.data);
      } catch (error) {
        console.log("unable to get user id post " + error);
      }
    };
    getUserPostData();
  }, [path]);

  // update user info
  const [study, setStudy] = useState(userInfoData.study);
  const [address, setAddress] = useState(userInfoData.address);
  const [jobs, setJobs] = useState(userInfoData.job);
  const [relationship, setRealationship] = useState(userInfoData.relationship);
  const [whatsapp, setWhatsApp] = useState(userInfoData.whatsapp);
  const [bio, setBio] = useState(userInfoData.bio);
  const [insta, setInsta] = useState(userInfoData.insta);
  const handleUserUpdate = (e) => {
    e.preventDefault();
    updateInfoUser(path, dispatch, {
      study,
      address,
      jobs,
      relationship,
      whatsapp,
      bio,
      insta,
    });
    navigate(`/user/${user._id}`);
    alert("profile info updated !");
  };

  // for profile images
  // show select images on to review
  // const [img, setImg] = useState();
  // const [selectProfileImg, setSelectProfileImg] = useState(null);
  // const [selectImageCover, setSelectImageCover] = useState(null);
  // const onImageChange = (e) => {
  //   const [file] = e.target.files;
  //   setImg(URL.createObjectURL(file));
  //   setSelectProfileImg({
  //     ...selectProfileImg,
  //     [e.target.name]: e.target.value,
  //   });
  //   setSelectImageCover({
  //     ...selectImageCover,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // // preview cover img
  // const [ak, setak] = useState();
  // const onImageChanges = (e) => {
  //   const [file] = e.target.files;
  //   setak(URL.createObjectURL(file));
  //   setSelectImageCover({
  //     ...selectImageCover,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const [selectImageCover, setSelectImageCover] = useState(null);
  const [selectImagesProfile, setSelectImagesProfile] = useState(null);

  // usestate for post
  const [progress, setProgress] = useState();

  // handleSubmitData(firebase)
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
          };
          updateInfoUser(path, dispatch, data);
          navigate(`/user/${user._id}`);
          alert("profile photo update..");
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
                  onChange={(e) => setSelectImagesProfile(e.target.files[0])}
                  // onChange={onImageChange}
                />
              </label>
            </div>
            {/* show select  img if user select the image  from the device*/}
            <img
              // src={selectProfileImg ? img : user.profilePic}
              src={userInfoData.profilePic}
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
                  onChange={(e) => setSelectImageCover(e.target.files[0])}
                  // onChange={onImageChanges}
                />
              </label>
            </div>
            {/* cover pic */}
            <img src={userInfoData.coverPic} alt="cover_img" />
            <div className="saveButtonP">
              <p className="text-center">save</p>
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
              // value={values.bio}
              defaultValue={userInfoData.desc}
              onChange={(e) => setBio(e.target.value)}
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
                  // value={values.study}
                  defaultValue={userInfoData.study}
                  onChange={(e) => setStudy(e.target.value)}
                />
              </div>
              {/* address */}
              <div className="inputBoxItem">
                <label htmlFor="">Address</label>
                <br />
                <input
                  type="text"
                  name="address"
                  // value={values.address}
                  defaultValue={userInfoData.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              {/* jobs */}
              <div className="inputBoxItem">
                <label htmlFor="">Jobs</label>
                <br />
                <input
                  type="text"
                  name="job"
                  // value={values.job}
                  defaultValue={userInfoData.job}
                  onChange={(e) => setJobs(e.target.value)}
                />
              </div>
              {/* relationship */}
              <div className="inputBoxItem">
                <label htmlFor="">Relationship</label>
                <br />
                <input
                  type="text"
                  name="relationship"
                  // value={values.relationship}
                  defaultValue={userInfoData.relationship}
                  onChange={(e) => setRealationship(e.target.value)}
                />
              </div>
              {/* hobbies */}
              <div className="inputBoxItem">
                <label htmlFor="">whatsApp</label>
                <br />
                <input
                  type="number"
                  name="whatsapp"
                  // value={values.whatsapp}
                  defaultValue={userInfoData.whatsapp}
                  onChange={(e) => setWhatsApp(e.target.value)}
                />
              </div>
              {/* insta */}
              <div className="inputBoxItem">
                <label htmlFor="">Instagram</label>
                <br />
                <input
                  type="text"
                  name="insta"
                  // value={values.insta}
                  defaultValue={userInfoData.insta}
                  onChange={(e) => setInsta(e.target.value)}
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

export default Edit;
