import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
// ReactToastify is use for alert

const Register = () => {
  return (
    <>
      <div className=" registerPage">
        <div className="registerFrom">
          <form className=" registerFormContainer">
            {/* name */}
            <div className="inputBox mt-2">
              <input
                label="UserName"
                name="username"
                type="text"
                placeholder="First name"
              />
              {/* lastname */}
              <input
                label="UserName"
                name="username"
                type="text"
                placeholder="Last name"
              />
            </div>
            {/* email */}
            <div className="inputBox">
              <input
                label="Email"
                name="email"
                type="email"
                placeholder="Mobile number or email"
              />
            </div>
            {/* birthday */}
            <div className="inputBox">
              <input
                label="Password"
                name="password"
                type="password"
                placeholder="password"
              />
            </div>
            {/* cpassword */}
            <div className="inputBox">
              <input
                label="Confirm Password"
                name="cpassword"
                type="password"
                placeholder="confirm password"
              />
            </div>
            <div className="inputBox">
              {/* <button onClick={handleRegister}>Continue</button> */}
              <button>Continue</button>
            </div>
          </form>
          <p>
            Already have an account ?{/* render to login page when click */}
            <Link className="link" to="/login">
              <span className="siginInBtn">SIGN IN</span>
            </Link>
          </p>
          <div className="terms">
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
            Policy. You may receive SMS Notifications from us and can opt out
            any time.
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
