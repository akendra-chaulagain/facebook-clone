import React from "react";
import "./UserPostOnly.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserPostOnly = ({ data }) => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <div className="UserPostOnly">
        {/* user profile desc */}
        <div className="userPost">
          <Link className="link" to={`/user/${user._id}`}>
            <div className="UserProfileIg">
              {/* <img className="img-fluid" src="./images/p.jpeg" alt="pp_img" /> */}
              <img className="img-fluid" src={user.profilePic} alt="pp_img" />
              {/* <span>Akendra Chaulagain</span> */}
              <span>{user.firstname + " " + user.lastname}</span>
              <br />
              <h6>{new Date(data.createdAt).toDateString()}</h6>
            </div>
          </Link>

          {/* icon */}
          <div className="posatIcon">
            <MoreHorizIcon />
          </div>
        </div>

        {/* caption */}
        <div className="caption">
          <p>{data.desc}</p>
        </div>
        {/* postImg */}
        <div className="postImgTimeLine">
          <img src={data.img} alt="post_img" />
        </div>
        <hr />
        <div className="likeNumber">
          <span>
            <FavoriteIcon />
          </span>
          <p>49</p>
        </div>
        {/* .like and comment section */}
        <div className="likeContainer">
          <div className="likeandLove">
            <FavoriteIcon />
            <span>Like</span>
          </div>

          {/* comment icon */}
          <div className="comment">
            <ModeCommentOutlinedIcon />
            <span>Comment</span>
          </div>
          {/* share icon */}
          <div className="share">
            <ReplySharpIcon />
            <span>Share</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPostOnly;
