import React from "react";
import Feed from "../../components/feed/Feed";
import Followers from "../../components/Followers/Followers";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPost } from "../../redux/apicalls";

const Home = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.posts);

  // useffect to get all data
  useEffect(() => {
    getAllPost(dispatch);
  }, [dispatch]);

  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 sidebarHomePage">
            <Sidebar />
          </div>
          <div className="col-6 postContainer">
            <Feed  />
            {/* post import fom post  components */}
            <div className="postContainer">
              {post?.map((data, i) => (
                <Post data={data} key={i} />
              ))}
            </div>
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
