import React from "react";
import { Link } from "react-router-dom";
import "./PersonalInfo.css";
import { useSelector } from "react-redux";

const PersonalInfo = () => {
  const user = useSelector((state) => state.user.currentUser.others);
  return (
    <>
      <div className="personalInfo">
        {/* personalInfo topbar */}
        <div className="personalInfoTopBar">
          <Link className="link personalInfoTopBarArrow" to="/setting">
            <i className="fa-solid fa-arrow-left-long"></i>
          </Link>
          <p>Perosnal & account information</p>
        </div>
        {/* personal components */}
        <div className="personalInfoContainer">
          {/* name */}
          <div className="personalInfoContent">
            <h3>Name</h3>
            <p>{user.firstname + " " + user.lastname}</p>
          </div>
          {/* contact info */}
          <div className="personalInfoContent">
            <h3>Contact Info</h3>
            <p>{user.contact}</p>
          </div>
          {/* name */}
          <div className="personalInfoContent">
            <h3>Account ownership and control</h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
