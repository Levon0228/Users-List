/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../config/index";
import AddEditModal from "./AddEditModal";

const AddEditModalContanier = (props) => {
  const [isSend, setIsSend] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { userId } = props;
  const [sendData, setSendData] = useState({});
  const [updatedData, setUpdatedData] = useState({});

  const { post } = props;
  const { isEdit } = props;
  useEffect(() => {
    if (isSend) {
      (async () => {
        const result = await axios.post(`${API_URL}/posts`, sendData);

        props.setPosts([...props.posts, result.data]);
        setIsSend(false);
      })();
    }
    if (isUpdate) {
      (async () => {
        const update = await axios.patch(
          `${API_URL}/posts/${post.id}`,
          updatedData
          );
        const index = props.posts.findIndex((el) => el.id === update.data.id);
        props.posts[index] = update.data;
        props.setPosts([...props.posts]);
        setIsUpdate(false);
      })();
    }
  }, [isSend, isUpdate]);

  return (
    <AddEditModal
      setSendData={setSendData}
      userId={userId}
      setIsSend={setIsSend}
      isSend={isSend}
      isEdit={isEdit}
      setIsEdit={props.setIsEdit}
      modalIsOpen={props.modalIsOpen}
      setIsOpen={props.setIsOpen}
      post={post}
      setIsUpdate={setIsUpdate}
      setUpdatedData={setUpdatedData}
      updatedData={updatedData}
    />
  );
};
export default AddEditModalContanier;
