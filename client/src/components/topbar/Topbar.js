import React from "react";
import "./Topbar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import Menu from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "../../redux/apicalls";

const Topbar = () => {
  const user = useSelector((state) => state.user.currentUser.others);
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
      <div className="container-fluid tobarContainer">
        <div className="row ">
          {/* left side topbar */}
          <div className="col-md-4 leftSideTopbar">
            <div className="facebookIcon">
              <h1>facebook</h1>
              {/* this icons will show when the user in small devices like Mobile */}
              <div className="searchIcon">
                <Link className="link" to="/search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
                <i className="fa-brands fa-facebook-messenger"></i>
              </div>
            </div>
            {/* search box when the user in big screen */}
            <div className="searchbox">
              {/* <Link className="link" to="/search"> */}
              <input type="text" placeholder="Search Facebook" />
              {/* </Link> */}
            </div>
          </div>
          {/* middle side topbar */}
          <div className="col-md-4 middleSideTopbar">
            {/* link is used to render to home page */}
            <Link className="link" to="/">
              <div className="middleIconElement">
                <i className="fa-solid fa-house"></i>
              </div>
            </Link>

            <div className="middleIconElement">
              <i className="fa-solid fa-video"></i>
            </div>
            <div className="middleIconElement">
              <i className="fa-solid fa-store"></i>
            </div>
            <div className="middleIconElement">
              <i className="fa-solid fa-user-group"></i>
            </div>
            <div className="middleIconElement menuItems">
              {/* render to menu(bookmark) part */}
              <Link className="link" to="/bookmark">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </div>
          </div>

          {/*  left side topbar*/}
          <div className="col-md-4 rightSideTopbar">
            {/* toggle(dark mode) */}
            <label className="label">
              <div className="toggle">
                <input
                  className="toggle-state"
                  type="checkbox"
                  name="check"
                  value="check"
                />
                <div className="indicator"></div>
              </div>
              <div className="label-text"></div>
            </label>

            {/* link is used to render to home page */}
            <Link className="link" to={`/user/${user?._id}`}>
              <div className="profileImg">
                <img
                  className="img-fluid"
                  src={
                    !info?.profilePic ? "../images/avtar.jpg" : info.profilePic
                  }
                  alt="pp_img"
                />
                <span>{user.firstname}</span>
              </div>
            </Link>

            <div className="rightSideIcon">
              {/* messanger */}
              <div className="rightIconItem">
                <i className="fa-brands fa-facebook-messenger"></i>
              </div>
              {/* nofification */}
              <div className="rightIconItem">
                <i class="fa-solid fa-bell"></i>
              </div>
              {/* render to setting  */}
              <div className="rightIconItem">
                <Link className="link rightIconItem" to="/setting">
                  <i class="fa-solid fa-gear"></i>
                </Link>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
