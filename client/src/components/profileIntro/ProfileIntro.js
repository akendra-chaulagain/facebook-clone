import React from "react";
import "./ProfileIntro.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Insta from "@mui/icons-material/Instagram";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ProfileIntro = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // get user info data from the userId which is present in database
  const [userPostData, setUserPostData] = useState({});
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    const getUserPostData = async () => {
      try {
        const res = await axios.post("/info/find/individualpost", {
          userId: path,
        });
        setUserPostData(res.data[0]);
        setDidMount(true);
      } catch (error) {
        console.log("unable to get user id post " + error);
      }
    };
    getUserPostData();
    return () => setDidMount(false);
  }, [path]);
  if (!didMount) {
    return null;
  }

  return (
    <>
      {/* if the user have info data then this code will run */}
      {userPostData ? (
        <>
          <div className="container-fluid profileIntro">
            <div className="row profileIntroWrapper">
              <div className="col-md-4 leftSideIntro">
                <div className="introIcons">
                  <h3 className="text-center mt-2">Intro</h3>
                  <p>{userPostData.bio}</p>
                  <hr />
                  {/* user information with icons */}
                  <div className="introIconItem">
                    <AutoStoriesIcon /> <span>{userPostData.study}</span>
                    <br />
                  </div>
                  <div className="introIconItem">
                    <HomeIcon />
                    <span>{userPostData.address}</span>
                    <br />
                  </div>
                  <div className="introIconItem">
                    <BusinessCenterIcon />
                    <span>{userPostData.job}</span>
                    <br />
                  </div>
                  <div className="introIconItem">
                    <FavoriteIcon /> <span>{userPostData.relationship}</span>
                    <br />
                  </div>
                  <div className="introIconItem">
                    <WhatsAppIcon /> <span>{userPostData.whatsapp}</span>
                    <br />
                  </div>
                  <div className="introIconItem">
                    <Insta /> <span>{userPostData.insta}</span>
                    <br />
                  </div>
                  <div className="introIconItem">
                    <DoubleArrowIcon />
                    <span>Followed by 124</span>
                  </div>
                  <div className="introIconItem">
                    <i className="fa-solid fa-clock"></i>
                    <span>
                      Joined on{" "}
                      {new Date(userPostData.createdAt).toDateString()}
                    </span>
                  </div>
                </div>
                {/* edit button (when click render to profile edit page*/}
                <div className="userInfoEditBtn">
                  <Link className="link" to={`/edit/${userPostData._id}`}>
                    <button>Edit Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>{/* if the user doesnot have any data then empty will show */}</>
      )}
    </>
  );
};

export default ProfileIntro;
