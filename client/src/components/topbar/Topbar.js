import React from "react";
import "./Topbar.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import Messanger from "@material-ui/icons/Message";
import Notification from "@material-ui/icons/Notifications";
import Menu from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

const Topbar = () => {
  return (
    <>
      <div className="container-fluid tobarContainer">
        <div className="row">
          <div className="topbarWrapper">
            {/* left side topbar */}
            <div className="col-4 leftSideTopbar">
              <div className="facebookIcon">
                <FacebookRoundedIcon style={{ fontSize: "50" }} />
              </div>
              <div className="searchbox">
                <input type="text" placeholder="Search Facebook" />
              </div>
            </div>
            {/* middle side topbar */}
            <div className="col-4 middleSideTopbar">
              {/* link is used to render to home page */}
              <Link to="/">
                <div className="middleIconElement">
                  <HomeRoundedIcon style={{ fontSize: 32 }} />
                  <p className="hide">Home</p>
                </div>
              </Link>

              <div className="middleIconElement">
                <OndemandVideoRoundedIcon style={{ fontSize: 29 }} />
                <p className="hide">Watch</p>
              </div>
              <div className="middleIconElement">
                <StorefrontRoundedIcon style={{ fontSize: 29 }} />
                <p className="hide">Marketplace</p>
              </div>
              <div className="middleIconElement">
                <PeopleOutlineRoundedIcon style={{ fontSize: 29 }} />
                <p className="hide">Groups</p>
              </div>
            </div>

            {/*  left side topbar*/}
            <div className="col-4 rightSideTopbar">
              {/* link is used to render to home page */}
              <Link className="link" to="/profile">
                <div className="profileImg">
                  <img
                    className="img-fluid"
                    src="./images/p.jpeg"
                    alt="pp_img"
                  />
                  <span>Akendra</span>
                </div>
              </Link>

              <div className="rightSideIcon">
                <div className="rightIconItem">
                  <Menu style={{ fontSize: 24 }} />
                  <p className="hide">Menu</p>
                </div>
                <div className="rightIconItem">
                  <Messanger style={{ fontSize: 22 }} />
                  <p className="hide">Message</p>
                </div>
                <div className="rightIconItem">
                  <Notification style={{ fontSize: 21 }} />
                  <p className="hide">Notification</p>
                </div>
                {/* drow down menu */}
                <div className="rightIconItem dropDownItem">
                  <div className="dropdown">
                    <button
                      className=" dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <ul className="dropdown-menu ">
                      <div className="dropDownIcon">
                        <LogoutIcon /> <span>Log Out</span>
                      </div>
                      <div className="dropDownIcon">
                        <SettingsIcon /> <span>Setting</span>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
