import React from "react";
import { Link } from "react-router-dom";
import "./ChangePassword.css";

const ChangePassword = () => {
  return (
    <div className="changePassword">
      {/* change password topbar */}
      <div className="passwordTopBar">
        <Link className="link passwordTopBarArrow" to="/setting">
          <i className="fa-solid fa-arrow-left-long"></i>
        </Link>
        <p>Change password</p>
      </div>
      <div className="changePasswordWrapperContainer">
        {/* new password */}
        <div className="changePasswordInputes">
          <input type="password" placeholder="New password" />
        </div>
        {/* confirm password */}
        <div className="changePasswordInputes">
          <input type="password" placeholder="Re-type new password" />
        </div>
        {/* save button */}
        <div className="changePasswordInputes">
          <button>Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
