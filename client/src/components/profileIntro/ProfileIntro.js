import React from "react";
import "./ProfileIntro.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Post from "../../components/post/Post";
import { Link } from "react-router-dom";

const ProfileIntro = () => {
  return (
    <>
      <div className="container-fluid profileIntro">
        <div className="row profileIntroWrapper">
          <div className="col-md-4 leftSideIntro">
            <div className="introIcons">
              {/* user information with icons */}
              <div className="introIconItem">
                <AutoStoriesIcon /> <span>Studing</span>
                <br />
              </div>
              <div className="introIconItem">
                <HomeIcon />
                <span>Lives in Kathmandu, Nepal</span>
                <br />
              </div>
              <div className="introIconItem">
                <BusinessCenterIcon />
                <span>Studing</span>
                <br />
              </div>
              <div className="introIconItem">
                <FavoriteIcon /> <span>Single</span>
                <br />
              </div>
              <div className="introIconItem">
                <WhatsAppIcon /> <span>98756464</span>
                <br />
              </div>
              <div className="introIconItem">
                <DoubleArrowIcon />
                <span>Followed by 124</span>
              </div>
            </div>
            {/* edit button (when click render to profile edit page*/}
            <div className="userInfoEditBtn">
              <Link className="link" to="/edit">
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
