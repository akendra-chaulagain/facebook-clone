import React from "react";
import Feed from "../../components/feed/Feed";
import Followers from "../../components/Followers/Followers";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-6 postContainer">
            <Feed />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div className="col-3 followersContainer">
            <Followers />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
