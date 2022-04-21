import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Home.css"

const Home = () => {
  return (
    <>
      <Topbar />

      <div className="home">
        <Sidebar />

        <div className="homeContainer"></div>
      </div>
    </>
  );
};

export default Home;
