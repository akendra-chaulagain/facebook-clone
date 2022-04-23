import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Topbar from "../../components/topbar/Topbar";
import "./Profile.css";
import Feed from "../../components/feed/Feed";
import ProfileIntro from "../../components/profileIntro/ProfileIntro";

const Profile = () => {
  return (
    <>
      <Topbar />

      <div className="profileContainer">
        <div className="profilwWrapper">
          <div className="profileCoverImg">
            <img src="./images/p.jpeg" alt="coverImg" />
            <div className="imgDesc">
              <p>
                <CameraAltIcon /> Edit cover photo
              </p>
            </div>
          </div>
          {/* user profileImg*/}
          <div className="profileIntro">
            <div className="profileImage">
              <img src="./images/p.jpeg" alt="profileImg" />
            </div>
            <div className="changePhotoIcon">
              <div className="changeIcon">
                <CameraAltIcon />
              </div>
            </div>
          </div>
          {/* user intro */}
          <div className="feedImport">
            <Feed />
          </div>
          {/* profileIntro  import from profilre into components*/}
          <ProfileIntro />
        </div>
      </div>
    </>
  );
};

export default Profile;
