import React from "react";
import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import AddPhoto from "./components/addPhoto/AddPhoto";
import Bookmark from "./components/Bookmark/Bookmark";
import Search from "./page/search/Search";
import Edit from "./page/EditProfile/Edit";
import Setting from "./page/setting/Setting";
import PersonalInfo from "./page/PersonalInfo/PersonalInfo";
import ChangePassword from "./page/changePassword/ChangePassword";
import EditPost from "./components/editPost/EditPost";
import Addinfo from "./page/addInfo/AddInfo";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { TOGGLE } from "./redux/darkModeReducer";
import ChangeEmail from "./page/changeEmail/ChangeEmail";

const App = () => {
  const user = useSelector((state) => state.user.currentUser.others);

  // Dark mode
  useEffect(() => {
    TOGGLE();
  }, []);
  const { darkMode } = useSelector((state) => state.dark);

  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <Router>
          <Routes>
            {/* home page */}
            <Route
              exact
              path="/"
              element={
                user ? <Home darkMod={darkMode} /> : <Navigate to="/login" />
              }
            />

            {/* login page */}
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />

            {/* profile page */}
            <Route
              path="/user/:id"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />
            {/* /add photo containeer */}
            <Route
              path="/addPhoto"
              element={user ? <AddPhoto /> : <Navigate to="/login" />}
            />
            {/* bookmark */}
            <Route
              path="/bookmark"
              element={user ? <Bookmark /> : <Navigate to="/login" />}
            />
            {/* search  */}
            <Route
              path="/search"
              element={user ? <Search /> : <Navigate to="/login" />}
            />
            {/* edit profile */}
            <Route
              path="/edit/:id"
              element={user ? <Edit /> : <Navigate to="/login" />}
            />
            {/* setting page */}
            <Route
              path="/setting"
              element={user ? <Setting /> : <Navigate to="/login" />}
            />
            {/* personal ingo(account) */}
            <Route
              path="/setting/account"
              element={user ? <PersonalInfo /> : <Navigate to="/login" />}
            />
            {/* change password */}
            <Route
              path="/setting/password"
              element={user ? <ChangePassword /> : <Navigate to="/login" />}
            />
            {/* edit post */}
            <Route
              path="/editPost/:id"
              element={user ? <EditPost /> : <Navigate to="/login" />}
            />
            {/* addinfo page */}
            <Route
              path="/addinfo/:id"
              element={user ? <Addinfo /> : <Navigate to="/login" />}
            />
            {/* change email */}
            <Route
              path="/email"
              element={user ? <ChangeEmail /> : <Navigate to="/login" />}
            />
            {/* ?register page */}
            <Route
              exact
              path="/register"
              element={user ? <Navigate to="/" /> : <Register />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
