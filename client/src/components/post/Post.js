import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = () => {
  const post = useSelector((state)=>state.posts)
  console.log(post);
  return (
    <>
      <div className="post">
        {/* user profile desc */}
        <div className="userPost">
          <Link className="link" to="/profile">
            <div className="UserProfileIg">
              <img className="img-fluid" src="./images/p.jpeg" alt="pp_img" />
              <span>Akendra Chaulagain</span>
              <br />
              <p>8h</p>
            </div>
          </Link>

          {/* icon */}
          <div className="posatIcon">
            <MoreHorizIcon />
          </div>
        </div>

        {/* caption */}
        <div className="caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            aspernatur molestias similique dolorum consequatur dolores ab
            ratione, corporis modi sed aperiam dolore deleniti! Dolor quae
            accusantium laudantium voluptatum laboriosam molestias!.
          </p>
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
