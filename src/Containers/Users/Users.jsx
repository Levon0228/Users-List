/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Users.module.css";

const Users = (props) => {
  const handleClick = (e, data) => props.setContext(data);
  const users = props.users;
  console.log("users", users)
  return (
    <div className={styles.usersContanier}>
      <h1>Users</h1>
      {users.map((u) => (
        <Link to={`/posts?userId=${u.id}`} key={u.id}>
          <div className={styles.user} onClick={(e) => handleClick(e, u)}>
            {u.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Users;
