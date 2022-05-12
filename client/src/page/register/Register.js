import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/apicalls";
import { useState } from "react";

const Register = () => {
  // usestate for login
  const [inputes, setinputes] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    birthday: "",
    password: "",
  });

  const handleChange = (event) => {
    setinputes({ ...inputes, [event.target.name]: event.target.value });
  };
  // register user
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(dispatch,inputes);
  };

  return (
    <>
      <div className=" registerPage">
        <h2>Join Facebook</h2>
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
                name="firstname"
                type="text"
                placeholder="First name"
                autoComplete="off"
                onChange={handleChange}
              />
              {/* lastname */}
              <input
                name="lastname"
                type="text"
                placeholder="Last name"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            {/* email */}
            <div className="inputBox">
              <input
                name="email"
                type="email"
                placeholder=" email"
                onChange={handleChange}
              />
            </div>
            {/* contact */}
            <div className="inputBox">
              <input
                name="contact"
                type="number"
                placeholder="Mobile number"
                onChange={handleChange}
              />
            </div>
            {/* birthday */}
            <div className="inputBox">
              <input
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            {/* date */}
            <div className="inputBoxBirthday">
              <label>Birthday</label>
              <input type="date" onChange={handleChange} name="birthday" />
            </div>
            {/* gender */}
            <div className="inputBoxGender">
              <span>Gender</span>
              <br />
              {/* male */}
              <input
                type="radio"
                value="male"
                id="male"
                name="gender"
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
              {/* female */}
              <input
                type="radio"
                value="female"
                id="female"
                name="gender"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
              {/* other */}
              <input
                type="radio"
                value="other"
                id="others"
                name="gender"
                onChange={handleChange}
              />
              <label htmlFor="others">Others</label>
            </div>
            <hr />
            <div className="terms">
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookies Policy.
            </div>
            <div className="inputBox">
              <button onClick={handleRegister}>Sign Up</button>
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
