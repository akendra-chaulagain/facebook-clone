import React from "react";
import "./Edit.css";
import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <>
      <div className="editContainer">
        <div className="editWrapper">
          {/* edit profile headers */}
          <div className="editheadertext">
            <h1>Edit Profile</h1>
            <Link className="link" to="/profile">
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
                <input type="file" id="file" style={{ display: "none" }} />
              </label>
            </div>
            <img src="./images/p.jpeg" alt="" />
          </div>

          {/* edit cover img */}
          <div className="editcoverPictureContainer">
            <div className="editcoverPicWrapper">
              <h3>Cover Photo</h3>
              {/* edit cover img(select images from the device) */}
              <label htmlFor="file">
                <p>edit</p>
                <input type="file" id="file" style={{ display: "none" }} />
              </label>
            </div>
            {/* cover pic */}
            <img src="./images/p.jpeg" alt="" />
          </div>

          {/* edit bio */}
          <div className="editBioDesc">
            <h3>Bio</h3>
            <textarea type="text" placeholder="describe yourself..." />
          </div>

          {/* edit info */}
          <div className="editInfoContainer">
            <h3>Customize your intro</h3>
            <form className="inputBoxes">
              {/* education */}
              <div className="inputBoxItem">
                <label htmlFor="">Education</label>
                <br />
                <input type="text" />
              </div>
              {/* address */}
              <div className="inputBoxItem">
                <label htmlFor="">Address</label>
                <br />
                <input type="text" />
              </div>
              {/* jobs */}
              <div className="inputBoxItem">
                <label htmlFor="">Jobs</label>
                <br />
                <input type="text" />
              </div>
              {/* relationship */}
              <div className="inputBoxItem">
                <label htmlFor="">Relationship</label>
                <br />
                <input type="text" />
              </div>
              {/* hobbies */}
              <div className="inputBoxItem">
                <label htmlFor="">Hobbies</label>
                <br />
                <input type="text" />
              </div>
            </form>
          </div>

          {/* save info button */}
          <div className="saveInfoButton">
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
