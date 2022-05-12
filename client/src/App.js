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

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* home page */}
          <Route exact path="/" element={<Home />} />
          {/* ?register page */}
          <Route path="/register" element={<Register />} />
          {/* login page */}
          <Route path="login" element={<Login />} />

          {/* profile page */}
          <Route path="/user/:id" element={<Profile />} />
          {/* /add photo containeer */}
          <Route path="/addPhoto" element={<AddPhoto />} />
          {/* bookmark */}
          <Route path="/bookmark" element={<Bookmark />} />
          {/* search  */}
          <Route path="/search" element={<Search />} />
          {/* edit profile */}
          <Route path="/edit/:id" element={<Edit />} />
          {/* setting page */}
          <Route path="/setting" element={<Setting />} />
          {/* personal ingo(account) */}
          <Route path="/setting/account" element={<PersonalInfo />} />
          {/* change password */}
          <Route path="/setting/password" element={<ChangePassword />} />
          {/* edit post */}
          <Route path="/editPost/:id" element={<EditPost />} />
          {/* addinfo page */}
          <Route path="/addinfo/:id" element={<Addinfo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
