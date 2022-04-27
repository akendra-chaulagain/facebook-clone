import React from "react";
import "./AddPhoto.css";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Link } from "react-router-dom";

const AddPhoto = () => {
  return (
    <>
      <div className="container-fluid addPhoto">
        <div className="row addphotoWrapper">
          <div className="addPhotoTitle">
            <p>Create Post</p>
            {/* whwn click render to home page */}
            <Link className="link" to="/">
              <div className="addPhotoIcon">
                <CloseIcon />
              </div>
            </Link>
          </div>
          <hr />
          {/* profileInfo */}
          <div className="UserAddProfileIg">
            <img className="img-fluid" src="./images/p.jpeg" alt="pp_img" />
            <span>Akendra Chaulagain</span>
          </div>
          {/* whats on your mind */}
          <div className="addPhotofeed ">
            <textarea
              type="text"
              placeholder="Whats's on your mind, Akendra?"
            />
          </div>
          {/* add photo video box */}
          <div className="addphotoBox">
            <div className="addPhotoIconphoto">
              <label htmlFor="file">
                <PhotoLibraryIcon style={{ fontSize: 28 }} />
                <input type="file" id="file" style={{ display: "none" }} />
              </label>
            </div>
            <div className="addPhotoIconText">
              <label htmlFor="file">
                <p>Add Photos/Videos</p>
                <input type="file" id="file" style={{ display: "none" }} />
              </label>
            </div>
          </div>
          {/* post button */}
          <div className="postButton">
            <button>Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPhoto;
