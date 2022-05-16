import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/apicalls";
import { format } from "timeago.js";

const Post = ({ data }) => {
  const id = data.userId;
  const [userIdData, setuserIdData] = useState({});

  // user's info
  const dispatch = useDispatch();
  useEffect(() => {
    getUserInfo(dispatch);
  }, [dispatch]);
  const info = useSelector((state) =>
    state.info.infos.find((info) => info.userId === userIdData._id)
  );

  // const info = useSelector((state) => state.info.infos);
  // console.log(info);

  // get post according to id
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
          <Link className="link" to={`/user/${userIdData?._id}`}>
            <div className="UserProfileIg">
              <img
                className="img-fluid"
                // if the userIdData and info's userId match then select profile pic from info
                src={info.profilePic}
                alt="pp_img"
              />
              <span>{userIdData?.firstname + " " + userIdData?.lastname}</span>
              <br />
              <h6>{format(data?.createdAt)}</h6>
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
        <div className="likeNumber mt-4">
          <span>
            <i className="fa-solid fa-thumbs-up"></i>
          </span>
          <p>49</p>
        </div>
        <hr />
        {/* .like and comment section */}
        <div className="likeContainer">
          <div className="likeandLove">
            <i className="fa-solid fa-thumbs-up"></i>
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
