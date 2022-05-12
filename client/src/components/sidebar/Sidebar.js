import React from "react";
import "./Sidebar.css";
import People from "@material-ui/icons/People";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EventIcon from "@mui/icons-material/Event";
import StarIcon from "@mui/icons-material/Star";
import Page from "@mui/icons-material/Flag";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "../../redux/apicalls";

const Sidebar = () => {
  const user = useSelector((state) => state.user.currentUser);

  // user's info
  const dispatch = useDispatch();
  useEffect(() => {
    getUserInfo(dispatch);
  }, [dispatch]);
  const info = useSelector((state) =>
    state.info.infos.find((info) => info.userId === user._id)
  );
  return (
    <>
      <div className="sidebar">
        <Link className="link" to={`/user/${user._id}`}>
          <div className="profileImgSidebar">
            <img className="img-fluid" src={info?.profilePic} alt="pp_img" />
            <p>Akendra Chaulagain</p>
          </div>
        </Link>

        <div className="sidebatIcon">
          <div className="sideBarIconItem friend">
            <GroupAddIcon style={{ fontSize: 29 }} />
            <div className="text">
              <span>Friends</span>
            </div>
          </div>
          <div className="sideBarIconItem group">
            <People style={{ fontSize: 29 }} />
            <div className="text">
              <span>Groups</span>
            </div>
          </div>
          <div className="sideBarIconItem store">
            <StorefrontRoundedIcon style={{ fontSize: 29 }} />
            <div className="text">
              <span>Marketplace</span>
            </div>
          </div>
          <div className="sideBarIconItem watch">
            <OndemandVideoRoundedIcon style={{ fontSize: 29 }} />
            <div className="text">
              <span>Watch</span>
            </div>
          </div>
          <div className="sideBarIconItem page">
            <Page style={{ fontSize: 29 }} />
            <div className="text">
              <span>Pages</span>
            </div>
          </div>
          <div className="sideBarIconItem memories">
            <WatchLaterOutlinedIcon />
            <div className="text">
              <span>Memories</span>
            </div>
          </div>
          <div className="sideBarIconItem saved">
            <BookmarkAddedIcon style={{ fontSize: 29 }} />
            <div className="text">
              <span>Saved</span>
            </div>
          </div>
          <div className="sideBarIconItem events">
            <EventIcon style={{ fontSize: 29 }} />
            <div className="text">
              <span>Events</span>
            </div>
          </div>
          <div className="sideBarIconItem recent">
            <ImportExportIcon style={{ fontSize: 29 }} />
            <div className="text">
              <span>Most Recent</span>
            </div>
          </div>
          <div className="sideBarIconItem favourites">
            <StarIcon style={{ fontSize: 29 }} />
            <div className="text ">
              <span>Favorites</span>
            </div>
          </div>
        </div>
        <p className="desc">
          Privacy · Terms · Advertising · Ad Choices <br />· Cookies &#169;·
          Meta © 2022
        </p>
      </div>
    </>
  );
};

export default Sidebar;
