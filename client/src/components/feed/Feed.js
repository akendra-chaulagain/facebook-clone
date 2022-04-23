import React from "react";
import "./Feed.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Feed = () => {
  return (
    <>
      <div className="container-fluid feed">
        <div className=" feedWrapper">
          {/* profilepic in feed */}
          <div className="profileImgFeed ">
            <img className="img-fluid" src="./images/p.jpeg" alt="pp_img" />
            <input type="text" placeholder="Whats's on your mind, Akendra?" />
            <hr />
          </div>
        </div>
        {/* icons */}
        <div className="feedIcons">
          <div className="feedVideoIcon feddIconItem">
            <VideoCallIcon style={{ fontSize: 27 }} />
            <span>Live Video</span>
          </div>
          <div className="feedImageIcon feddIconItem">
            <PhotoLibraryIcon />
            <span>Photo/Video</span>
          </div>
          <div className="feedActivitiesIcon feddIconItem">
            <EmojiEmotionsIcon />
            <span>Feeling/activity</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
