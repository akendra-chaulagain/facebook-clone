import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className=" registerPage">
        <div className="registerFrom">
          <div className="registerHeadingText">
            <h2>Sign Up</h2>
            <p>It's quick and easy.</p>
            <hr />
          </div>

          <form className=" registerFormContainer">
            {/* name */}
            <div className=" inputBoxFirst mt-2">
              <input
                name="username"
                type="text"
                placeholder="First name"
                autoComplete="off"
              />
              {/* lastname */}
              <input
                name="username"
                type="text"
                placeholder="Last name"
                autoComplete="off"
              />
            </div>
            {/* email */}
            <div className="inputBox">
              <input
                name="email"
                type="email"
                placeholder="Mobile number or email"
              />
            </div>
            {/* birthday */}
            <div className="inputBox">
              <input name="password" type="password" placeholder="password" />
            </div>
            {/* date */}
            <div className="inputBoxBirthday">
              <label>Birthday</label>
              <input type="date" />
            </div>
            {/* gender */}
            <div className="inputBoxGender">
              <span>Gender</span>
              <br />
              {/* male */}
              <input type="radio" value="male" id="male" name="drone" />
              <label htmlFor="male">Male</label>
              {/* female */}
              <input type="radio" value="female" id="female" name="drone" />
              <label htmlFor="female">Female</label>
              {/* other */}
              <input type="radio" value="other" id="others" name="drone" />
              <label htmlFor="others">Others</label>
            </div>
            <hr />
            <div className="terms">
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookies Policy. You may receive SMS Notifications from us and can
              opt out any time.
            </div>
            <div className="inputBox">
              <button>Sign Up</button>
            </div>
            <p className="alreadyAccount">
              Already have an account ?{/* render to login page when click */}
              <Link className="link linkBtn" to="/login">
                <span className="siginInBtn">SIGN IN</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
