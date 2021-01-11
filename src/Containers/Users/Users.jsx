/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Users.module.css";
import { API_URL } from "../../config/index";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/users`);
      setUsers(result.data);
    })();
  }, []);
  return (
    <div className={styles.usersContanier}>
      <h1>Users</h1>
      {users.map((u) => (
        <Link to={`/posts?userId=${u.id}`} key={u.id}>
          <div className={styles.user}>{u.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Users;
