import React from "react";
import "./UserPostOnly.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePosts, getUserInfo } from "../../redux/apicalls";
import { useEffect } from "react";
import { format } from "timeago.js";

const UserPostOnly = ({ data, path }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser.others);

  // delete post
  const handleDelete = (id) => {
    deletePosts(dispatch, id);
    alert("post deleted");
    // window.location.reload(`/user/${user._id}`);
  };

  // user's info
  useEffect(() => {
    getUserInfo(dispatch);
  }, [dispatch]);
  const info = useSelector((state) =>
    state.info.infos.find((info) => info.userId === user._id)
  );

  return (
    <>
      <div className="UserPostOnly">
        <div className="userPost">
          <Link className="link" to={`/user/${user._id}`}>
            <div className="UserProfileOnyIg">
              {/* <img className="img-fluid" src="./images/p.jpeg" alt="pp_img" /> */}
              <img
                className="img-fluid"
                src={
                  !info.profilePic ? "../images/avtar.jpg" : info?.profilePic
                }
                alt="pp_img"
              />
              {/* <span>Akendra Chaulagain</span> */}
              <span>{user.firstname + " " + user.lastname}</span>
              <br />
              <h6>{format(data.createdAt)}</h6>
            </div>
          </Link>

          {/* edit button */}
          {/* edit button is shown to the user only */}
          {path === user._id ? (
            <div className="posatIcon">
              <button className="dropbtn">
                <MoreHorizIcon />
              </button>
              {/* drop down */}
              <div className="dropdown-content">
                {/* edit post */}
                <Link className="link" to={`/editPost/${data._id}`}>
                  <p>edit post</p>
                </Link>
                {/* delete post */}
                <p onClick={() => handleDelete(data._id)}>delete post</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* caption */}
        <div className="caption">
          <p>{data.desc}</p>
        </div>
        {/* postImg */}
        <div className="postImgTimeLineUser">
          <img src={data.img} alt="post_img" />
        </div>
        <div className="likeNumber mt-4">
          <span>
            <i class="fa-solid fa-thumbs-up"></i>
          </span>
          <p>49</p>
        </div>
        <hr />
        {/* .like and comment section */}
        <div className="likeContainer">
          <div className="likeandLove">
            <i class="fa-solid fa-thumbs-up"></i>
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
