import React from "react";
import "./Profile.css";
import Feed from "../../components/feed/Feed";
import ProfileIntro from "../../components/profileIntro/ProfileIntro";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserPostOnly from "../../components/UserPostOnly/UserPostOnly";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/apicalls";

const Profile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

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

  // get user info from the userId
  // get user info data(by using react redux)
  useEffect(() => {
    getUserInfo(dispatch);
  }, [dispatch]);
  const info = useSelector((state) =>
    state.info.infos.find((info) => info.userId === path)
  );

  // get user's post only in profile page
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
  if (!didMount) {
    return null;
  }

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
            <img src={info?.coverPic} alt="coverImg" />
          </div>
          {/* user profileImg*/}
          <div className="profileIntroImg">
            <div className="profileImage">
              <img
                src={
                  !info?.profilePic ? "../images/avtar.jpg" : info?.profilePic
                }
                alt="profileImg"
              />
            </div>
          </div>
          {/* user profile name */}
          <div className="userProfileNameSpan">
            <h1>{userData.firstname + " " + userData.lastname}</h1>
            {/* user bio */}
            <p className="text-center">{info?.bio}</p>
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
              <UserPostOnly data={data} userPostData={userPostData} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
