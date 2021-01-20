/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/index";
import Users from "./Users";

const UsersContanier = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/users`);
      setUsers(result.data);
    })();
  }, []);
  return <Users users={users} />;
};

export default UsersContanier;
