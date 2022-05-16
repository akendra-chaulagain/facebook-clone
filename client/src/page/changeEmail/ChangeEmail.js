import React from "react";
import { Link } from "react-router-dom";
import "./ChangeEmail.css";

const ChangeEmail = () => {
  return (
    <div className="changeEmail">
      {/* change Email topbar */}
      <div className="EmailTopBar">
        <Link className="link EmailTopBarArrow" to="/setting">
          <i className="fa-solid fa-arrow-left-long"></i>
        </Link>
        <p>Change Email & Phone Number</p>
      </div>
      <div className="changeEmailWrapperContainer">
        {/* new Email */}
        <div className="changeEmailInputes">
          <input type="email" placeholder="New email" />
        </div>
        {/* confirm Email */}
        <div className="changeEmailInputes">
          <input type="number" placeholder="New phone number" />
        </div>
        {/* save button */}
        <div className="changeEmailInputes">
          <button>Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeEmail;
