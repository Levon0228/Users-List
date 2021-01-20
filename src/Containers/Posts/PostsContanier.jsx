/** @format */

import React, { useState, useEffect, } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../config/index";
import Post from "./Post";
import styles from "./Posts.module.css";

const PostsContanier = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/posts${search}`);
      setPosts(result.data);
    })();
  }, []);
  return (
    <div className={styles.postsContanier}>
      <h1> Posts List</h1>
      {posts.map((p) => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  );
};

export default PostsContanier;
