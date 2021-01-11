/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import styles from "./Posts.module.css";

const Posts = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const {search} = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts${search}`
      );
      setData(result.data);
      setLoad(true);
    };
    fetchData();
  }, []);
  if (load) {
    return (
      <div className={styles.postsContanier}>
        <h1>Posts List</h1>
        {data.map((p) => (
          <div key={p.id} className={styles.post}>{p.body}</div>
        ))}
      </div>
    );
  } else {
    return <div> Loading...</div>;
  }
};

export default Posts;
