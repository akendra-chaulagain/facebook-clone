import React from "react";
import "./Profile.css";
import Feed from "../../components/feed/Feed";
import ProfileIntro from "../../components/profileIntro/ProfileIntro";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserPostOnly from "../../components/UserPostOnly/UserPostOnly";

const Profile = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  // user

  // get user according to user id given in url
  const [userData, setuserData] = useState({});
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get("/users/find/" + path);
        setuserData(res.data);
        setDidMount(true);
      } catch (error) {
        console.log("unable to get user id data" + error);
      }
    };
    getUserData();
    return () => setDidMount(false);
  }, [path]);

  // get user post only in profile page
  const [userPostData, setUserPostData] = useState([]);
  useEffect(() => {
    const getUserPostData = async () => {
      try {
        const res = await axios.post("/posts/find/individualpost", {
          userId: path,
        });
        setUserPostData(res.data);
      } catch (error) {
        console.log("unable to get user id post " + error);
      }
    };
    getUserPostData();
  }, [path]);

  return (
    <>
      <div className="profileContainer">
        <div className="progileTopbar">
          <Link className="link renderHomePage" to="/">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          {/* user name */}
          <p>{userData.firstname + " " + userData.lastname}</p>
        </div>
        <div className="profilwWrapper">
          <div className="profileCoverImg">
            {/* user cover pic */}
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
          <div className="profileIntroImg">
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
            {/* user bio */}
            <p>{userData.descBio}</p>
          </div>
        </div>
      </div>
      {/* geed import from feed component */}
      <div className="feeDProfile">
        <Feed />
      </div>
      {/* for post and userInfo */}
      <div className="conatiner-fluid profilePostnadIntro">
        <div className="row">
        {/* profile and user all photo */}
          <div className="col-md-5 leftprofilePostnadIntro">
            <ProfileIntro />
            {/* <Photo/> */}
          </div>
          <div className="col-md-7 rightprofilePostnadIntro">
            {userPostData?.map((data, i) => (
              <UserPostOnly data={data} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
