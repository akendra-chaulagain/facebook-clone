import React from "react";
import "./Profile.css";
import Feed from "../../components/feed/Feed";
import ProfileIntro from "../../components/profileIntro/ProfileIntro";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="profileContainer">
        <div className="progileTopbar">
          <Link className="link renderHomePage" to="/">
            <i className="fa-solid fa-arrow-left-long"></i>
          </Link>
          <p>Akendra Chaulagain</p>
        </div>
        <div className="profilwWrapper">
          <div className="profileCoverImg">
            <img src="./images/p.jpeg" alt="coverImg" />
            {/* select cover photo */}
            <div className="imgprofileCamera">
              <p>
                <label htmlFor="file">
                  <i className="fa-solid fa-camera"></i>
                  <input type="file" id="file" style={{ display: "none" }} />
                </label>
              </p>
            </div>
          </div>
          {/* user profileImg*/}
          <div className="profileIntro">
            <div className="profileImage">
              <label htmlFor="file">
                <img src="./images/p.jpeg" alt="profileImg" />
                <input type="file" id="file" style={{ display: "none" }} />
              </label>
            </div>
          </div>
          {/* user profile name */}
          <div className="userProfileNameSpan">
            <p>Akendra Chaulagain</p>
          </div>
          {/* user intro */}
          <div className="feedImport">
            <Feed />
            <hr />
          </div>
          {/* profileIntro  import from profilre into components*/}
          <ProfileIntro />
        </div>
      </div>
    </>
  );
};

export default Profile;
