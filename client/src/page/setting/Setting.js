import React from "react";
import "./Setting.css";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <>
      <div className="settingContainer">
        {/* setting topbar */}
        <div className="settingTopBar">
          <Link className="link settingTopBarArrow" to="/">
            <i className="fa-solid fa-arrow-left-long"></i>
          </Link>
          <p>Setting & privacy</p>
        </div>
        {/* setting components */}
        <div className="settingComponentContainer">
          <div className="settingComponentTextContainer">
            <h3>Account</h3>
            <span>Update your info to keep your account safe</span>
          </div>
          {/* setting Link */}
          <div className="settingLinks">
            {/* user info */}
            <Link className="link settingLinks" to="/setting/account">
              <i className="fa-solid fa-user"></i>
              <span>Personal and account information</span>
            </Link>
          </div>
          {/* password and securiyu */}
          <div className="settingLinks">
            <Link className="link settingLinks" to="/setting/password">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Password and security</span>
            </Link>
          </div>
          {/* payment */}
          <div className="settingLinks">
            <i className="fa-solid fa-money-check"></i>
            <span>Payment</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
