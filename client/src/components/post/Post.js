import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Post = ({ data }) => {
  // to get data ccording to id
  const [getUserIdData, setgerUserIdData] = useState({});
  useEffect(() => {
    const userIdData = async () => {
      try {
        const res = await axios.get(`users/find/${data.userId}`);
        setgerUserIdData(res.data);
      } catch (error) {
        console.log("unable to get user id data" + error);
      }
    };
    userIdData();
  }, [data.userId]);

  return (
    <>
      <div className="post">
        {/* user profile desc */}
        <div className="userPost">
          <Link className="link" to="/profile">
            <div className="UserProfileIg">
              <img className="img-fluid" src="./images/p.jpeg" alt="pp_img" />
              <span>
                {getUserIdData.firstname + " " + getUserIdData.lastname}
              </span>
              <br />
              {/* post created date */}
              <h6>{new Date(getUserIdData.createdAt).toDateString()}</h6>
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
          <img src="./images/p.jpeg" alt="post_img" />
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

export default Post;
