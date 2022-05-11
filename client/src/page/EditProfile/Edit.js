import React from "react";
import "./Edit.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../redux/apicalls";
import axios from "axios";

const Edit = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const user = useSelector((state) => state.user.currentUser);

  // console.log(user);

  // get user according to user id given in url
  // const [desc, setDesc] = useState("");
  // const [selectImageProfile, setSelectImagesProfile] = useState(null);
  // const [selectImageCover, setSelectImageCover] = useState(null);
  // const [education, setEducation] = useState();
  // const [address, setAddress] = useState();
  // const [jobs, setJobs] = useState();
  // const [realationship, setRealationship] = useState();
  // const [whatsapp, setWhatsApp] = useState();
  // const [bio, setBio] = useState();
  const [selectImageProfile, setSelectImagesProfile] = useState(null);
  const [selectImageCover, setSelectImageCover] = useState(null);
  const [ak, setak] = useState({});
  const [values, setValues] = useState({
    job: "",
    bio: "",
    study: "",
    address: "",
    insta: "",
    whatsapp: "",
    relationship: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/posts/${user._id}`, { values });
      setak(res.data);
      console.log(res);
    } catch (error) {
      console.log("unalbe to update" + error);
    }
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
                <p>edit</p>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  name="profilePic"
                  onChange={(e) => setSelectImagesProfile(e.target.files[0])}
                />
              </label>
            </div>
            <img src={user.profilePic} alt="profilePic" />
          </div>

          {/* edit cover img */}
          <div className="editcoverPictureContainer">
            <div className="editcoverPicWrapper">
              <h3>Cover Photo</h3>
              {/* edit cover img(select images from the device) */}
              <label htmlFor="file">
                <p>edit</p>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  name="coverPic"
                  onChange={(e) => setSelectImageCover(e.target.files[0])}
                />
              </label>
            </div>
            {/* cover pic */}
            <img src={user.coverPic} alt="cover_img" />
          </div>

          {/* edit bio */}
          <div className="editBioDesc">
            <h3>Bio</h3>
            <textarea
              type="text"
              name="bio"
              // value={values.bio}
              defaultValue={user.desc}
              onChange={handleInputChange}
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
                  defaultValue={user.study}
                  onChange={handleInputChange}
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
                  defaultValue={user.address}
                  onChange={handleInputChange}
                />
              </div>
              {/* jobs */}
              <div className="inputBoxItem">
                <label htmlFor="">Jobs</label>
                <br />
                <input
                  type="text"
                  name="jobs"
                  // value={values.job}
                  defaultValue={user.job}
                  onChange={handleInputChange}
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
                  defaultValue={user.relationship}
                  onChange={handleInputChange}
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
                  defaultValue={user.whatsapp}
                  onChange={handleInputChange}
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
                  defaultValue={user.insta}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>

          {/* save info button */}
          <div className="saveInfoButton">
            <button onClick={handleUserUpdate}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
