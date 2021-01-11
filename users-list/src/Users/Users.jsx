/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Users.module.css";

const Users = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
      setLoad(true);
    };
    fetchData();
  }, []);
  if (load) {
    return (
      <div className={styles.usersContanier}>
        <h1>Users</h1>
        {data.map((u) => (
          <Link to={`/posts?userId=${u.id}`} key={u.id}>
            <div className={styles.user}>{u.name}</div>
          </Link>
        ))}
      </div>
    );
  } else {
    return <div> Loading...</div>;
  }
};

export default Users;
