import React from "react";
import "./Bookmark.css";
import People from "@material-ui/icons/People";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import Page from "@mui/icons-material/Flag";
import { Link } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { useEffect } from "react";
import { getUserInfo } from "../../redux/apicalls";

const Bookmark = () => {
  // user
  const user = useSelector((state) => state.user.currentUser);
  // isLoading function
  const isLoading = useSelector((state) => state.user.isLoading);
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* top bar import from topbar component */}
          <Topbar />
          <div className="bookmark">
            <Link className="link" to={`/user/${user._id}`}>
              <div className="profileImgbookmark">
                {/* user img */}
                <img
                  className="img-fluid"
                  src={
                    !info?.profilePic ? "./images/avtar.jpg" : info?.profilePic
                  }
                  alt="pp_img"
                />
                {/* user name */}
                <h1>{user.firstname + " " + user.lastname}</h1>
              </div>
              <hr />
            </Link>

            <div className="sidebatIcon">
              <div className="bookmarkIconItem friend">
                <GroupAddIcon style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Friends</span>
                </div>
              </div>
              <div className="bookmarkIconItem group">
                <People style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Groups</span>
                </div>
              </div>
              <div className="bookmarkIconItem store">
                <StorefrontRoundedIcon style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Marketplace</span>
                </div>
              </div>
              <div className="bookmarkIconItem watch">
                <OndemandVideoRoundedIcon style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Watch</span>
                </div>
              </div>
              <div className="bookmarkIconItem page">
                <Page style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Pages</span>
                </div>
              </div>
              <div className="bookmarkIconItem memories">
                <WatchLaterOutlinedIcon />
                <div className="text">
                  <span>Memories</span>
                </div>
              </div>
              {/* setting */}
              <div className="bookmarkIconItem ">
                <Link className="link setting" to="/setting">
                  <i className="fa-solid fa-gear"></i>
                  <div className="text ">
                    <span>Setting</span>
                  </div>
                </Link>
              </div>
              {/* logout */}
              <div className="bookmarkIconItem logoutBtn">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <div className="text ">
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Bookmark;
