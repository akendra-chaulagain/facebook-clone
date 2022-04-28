import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const search = () => {
  const user = "";
  return (
    <>
      <div className="container-fluid searchContainer">
        <div className="row searchBoxWrapper">
          <div className="col-1 goToHomePageArrow">
            <Link className="link" to="/">
              <i className="fa-solid fa-arrow-left-long"></i>
            </Link>
          </div>
          <div className="col-10 searchInputBox">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="col-1 lensIcon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <hr />
        </div>
        {user.length === 0 ? (
          <>
            <div className="searchUserData">
              <p>No recent searches</p>
            </div>
          </>
        ) : (
          <>
            <div className="searchUserData">
              <p>akendra chaulagain</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default search;
