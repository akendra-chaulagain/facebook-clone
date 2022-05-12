import React from "react";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

export const UpdateProfilePhoto = (img) => {
  console.log(img);
  const [progress, setProgress] = useState();
  const [selectImage, setSelectImages] = useState(null);

  // handleSubmitData(firebase)
  const handleSubmitData = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + selectImage.name;
    const Storage = getStorage(app);
    const storageRef = ref(Storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, selectImage);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = "";
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            setProgress(progress);
            break;
          case "running":
            setProgress(progress);
            break;
          default:
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const post = {
            img: downloadURL,
          };
          //   createPost(post, dispatch);
        });
      }
    );
  };
};
