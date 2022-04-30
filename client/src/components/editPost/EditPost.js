import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const EditPost = () => {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

//   get post data according to id
 const [editData, seteEditData] = useState({});
 const [didMount, setDidMount] = useState(false);
 useEffect(() => {
   const getUserData = async () => {
     try {
       const res = await axios.get("/posts/find/" + path);
       seteEditData(res.data);
       setDidMount(true);
     } catch (error) {
       console.log("unable to get user id data" + error);
     }
   };
   getUserData();
   return () => setDidMount(false);
 }, [path]);
 console.log(editData);

  return (
    <>
      <div className="container-fluid addPhoto">
        <form className="row addphotoWrapper">
          <div className="addPhotoTitle">
            <p>Edit Post</p>
            {/* whwn click render to home page */}
            <Link className="link" to={`/user/${user._id}`}>
              <div className="addPhotoIcon">
                <CloseIcon />
              </div>
            </Link>
          </div>
          <hr />
          <div className="addPhotofeed ">
            <textarea
              type="text"
              name="desc"
              placeholder="Enter your new caption"
            />
          </div>
          {/* add photo video box */}
          <div className="addphotoBox">
            <div className="addPhotoIconphoto">
              <label htmlFor="file">
                <PhotoLibraryIcon style={{ fontSize: 28 }} />
                <input
                  type="file"
                  id="file"
                  name="img"
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <div className="addPhotoIconText">
              <p>Add Photos/Videos</p>
              {/* <input type="file" id="file" style={{ display: "none" }} /> */}
            </div>
          </div>
          {/* post button */}
          <div className="postButton">
            <button>Edit post</button>
            <br />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPost;
