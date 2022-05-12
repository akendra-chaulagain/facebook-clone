import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Post = ({ data }) => {
  const id = data.userId;
  const [userIdData, setuserIdData] = useState({});
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/users/find/" + id);
        setuserIdData(res.data);
        setDidMount(true);
      } catch (error) {
        console.log("unable to get user id data" + error);
      }
    };
    getData();
    return () => setDidMount(false);
  }, [id]);
  if (!didMount) {
    return null;
  }

  return (
    <>
      <div className="post">
        {/* user profile desc */}
        <div className="userPost">
          <Link className="link" to={`/user/${userIdData._id}`}>
            <div className="UserProfileIg">
              <img
                className="img-fluid"
                src={userIdData?.profilePic}
                alt="pp_img"
              />
              {/* <span>Akendra Chaulagain</span> */}
              <span>{userIdData.firstname + " " + userIdData.lastname}</span>
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

export default Post;
