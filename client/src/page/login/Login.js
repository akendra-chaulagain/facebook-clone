import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/apicalls";
import { useDispatch, useSelector } from "react-redux";

import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(dispatch, { email, password });
  };

  return (
    <>
      <div className="container-fluid login">
        <div className="row loginWrapper">
          <div className="col-md-6 leftSideLogin">
            <div className="loginLeftSideText">
              <h1>facebook</h1>
              <h3>
                Connect with friends and the world around you on Facebook.
              </h3>
            </div>
          </div>
          {/* login form */}
          <div className="col-md-6 rightSideLoginForm">
            <form>
              <div className="usernameEmailInput">
                <input
                  type="text"
                  placeholder="Email or phone number"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="passwordInput">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="loginBtn">
                <button onClick={handleLogin}>Login In</button>
                <p className="text-center">Forgot password?</p>
              </div>
              <hr />
              {/* create new account button */}
              <div className="createNewAccountBtn">
                <Link className="link" to="/register">
                  <button>Create new account</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
