/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../config/index";
import AddEditModal from "./AddEditModal";

const AddEditModalContanier = (props) => {
  const [isSend, setIsSend] = useState(false);
  const { userId } = props;
  const [sendData, setSendData] = useState({});

  useEffect(() => {
    if (isSend) {
      (async () => {
        const result = await axios.post(`${API_URL}/posts`, sendData);
        props.setPosts([...props.posts, result.data]);
        setIsSend(false);
      })();
    }
  }, [isSend]);

  return (
    <AddEditModal
      setSendData={setSendData}
      userId={userId}
      setIsSend={setIsSend}
      isSend={isSend}
      modalIsOpen={props.modalIsOpen}
      setIsOpen={props.setIsOpen}
    />
  );
};
export default AddEditModalContanier;
