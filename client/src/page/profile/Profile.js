import React from "react";
import "./Profile.css";
import Feed from "../../components/feed/Feed";
import ProfileIntro from "../../components/profileIntro/ProfileIntro";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // get user according to user id given in url
  const [userData, setuserData] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get("/users/find/" + path);
        setuserData(res.data);
      } catch (error) {
        console.log("unable to get user id data" + error);
      }
    };
    getUserData();
  }, [path]);

  return (
    <>
      <div className="profileContainer">
        <div className="progileTopbar">
          <Link className="link renderHomePage" to="/">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <p>{userData.firstname + " " + userData.lastname}</p>
        </div>
        <div className="profilwWrapper">
          <div className="profileCoverImg">
            <img src={userData.coverPic} alt="coverImg" />
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
                <img src={userData.profilePic} alt="profileImg" />
                <input type="file" id="file" style={{ display: "none" }} />
              </label>
            </div>
          </div>
          {/* user profile name */}
          <div className="userProfileNameSpan">
            <h1>{userData.firstname + " " + userData.lastname}</h1>
            <p>{userData.descBio}</p>
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
