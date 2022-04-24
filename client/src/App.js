import React from "react";
import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import AddPhoto from "./components/addPhoto/AddPhoto";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* ?register page */}
          <Route path="/register" element={<Register />} />
          {/* login page */}
          <Route path="login" element={<Login />} />
          {/* home page */}
          <Route exact path="/" element={<Home />} />
          {/* profile page */}
          <Route exact path="/profile" element={<Profile />} />
          {/* /add photo containeer */}
          <Route exact path="/addPhoto" element={<AddPhoto />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
