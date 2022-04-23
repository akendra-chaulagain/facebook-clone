import React from "react";
import "./Login.css";

const Login = () => {
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
                <input type="text" placeholder="Email or phone number" />
              </div>
              <div className="passwordInput">
                <input type="password" placeholder="password" />
              </div>
              <div className="loginBtn">
                <button>Login In</button>
                <p className="text-center">Forgot password?</p>
              </div>
              <hr />
              {/* create new account button */}
              <div className="createNewAccountBtn">
                  <button>Create new account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
