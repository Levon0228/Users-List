/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../Context/Context";
import { API_URL } from "../../config/index";
import Users from "./Users"

const UsersContanier = () => {
  const [users, setUsers] = useState([]);
  const [context, setContext] = useContext(Context);
  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/users`);
      setUsers(result.data);
    })();
  }, []);
  return (
    <Users users={users} setContext={setContext} />
  );
};

export default UsersContanier;
