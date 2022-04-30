import React from "react";
import "./Feed.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Feed = () => {
  // user data
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <div className=" feed">
        <div className=" feedWrapper">
          {/* profilepic in feed */}
          <div className="profileImgFeed ">
            <Link to={`user/${user._id}`}>
              <img className="img-fluid" src={user.profilePic} alt="pp_img" />
            </Link>
            <Link className="link" to="/addPhoto">
              <input
                type="text"
                placeholder={`Whats's on your mind, ${user.firstname}?`}
              />
            </Link>
            <hr />
          </div>
        </div>
        {/* icons */}
        <div className="feedIcons">
          <Link className="link" to="/addPhoto">
            <div className="feedImageIcon feddIconItem">
              <PhotoLibraryIcon style={{ fontSize: 20 }} />
              <span>Photo/Video</span>
            </div>
          </Link>

          <div className="feedActivitiesIcon feddIconItem">
            <EmojiEmotionsIcon style={{ fontSize: 17 }} />
            <span>Feeling/activity</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
