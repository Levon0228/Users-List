/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styles from "./Posts.module.css";
import { API_URL } from "../../config/index";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  const { search } = useLocation();
  useEffect(() => {
    const fetchData = (async () => {
      const result = await axios(
        `${API_URL}/posts${search}`
      );
      setPosts(result.data);
      setLoad(true);
    })();
  }, []);
  return (
    <div className={styles.postsContanier}>
      <h1>Posts List</h1>
      {posts.map((p) => (
        <div key={p.id} className={styles.post}>
          {p.body}
        </div>
      ))}
    </div>
  );
};

export default Posts;
