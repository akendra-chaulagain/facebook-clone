import React from "react";
import "./ProfileIntro.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Insta from "@mui/icons-material/Instagram";
import InterestsIcon from "@mui/icons-material/Interests";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileIntro = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <div className="container-fluid profileIntro">
        <div className="row profileIntroWrapper">
          <div className="col-md-4 leftSideIntro">
            <div className="introIcons">
              <h3 className="text-center mt-2">Intro</h3>
              {/* user information with icons */}
              <div className="introIconItem">
                <AutoStoriesIcon /> <span>{user.study}</span>
                <br />
              </div>
              <div className="introIconItem">
                <HomeIcon />
                <span>{user.address}</span>
                <br />
              </div>
              <div className="introIconItem">
                <BusinessCenterIcon />
                <span>{user.job}</span>
                <br />
              </div>
              <div className="introIconItem">
                <FavoriteIcon /> <span>{user.relationship}</span>
                <br />
              </div>
              <div className="introIconItem">
                <WhatsAppIcon /> <span>{user.whatsapp}</span>
                <br />
              </div>
              <div className="introIconItem">
                <Insta /> <span>{user.insta}</span>
                <br />
              </div>
              <div className="introIconItem">
                <DoubleArrowIcon />
                <span>Followed by 124</span>
              </div>
              <div className="introIconItem">
                <InterestsIcon />
                {user.hobbies.map((item, key) => (
                  <span key={key}>{item}</span>
                ))}
              </div>
            </div>
            {/* edit button (when click render to profile edit page*/}
            <div className="userInfoEditBtn">
              <Link className="link" to={`/edit/${user._id}`}>
                <button>Edit Details</button>
              </Link>
            </div>
          </div>
          <div className="col-md-8 rightSideIntro"></div>
        </div>
      </div>
    </>
  );
};

export default ProfileIntro;
