/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../config/index";
import DeleteModal from "./DeleteModal";

const DeleteModalContanier = (props) => {
  const [isDelete, setisDelete] = useState(false);
  const {post} = props;
  useEffect(() => {
    if (isDelete) {
      (async () => {
        await axios.delete(`${API_URL}/posts/${post.id}`);
        const index = props.posts.findIndex((el) => el.id === post.id);
        const a = props.posts.splice(index,1)
        props.setPosts([...props.posts]);
        setisDelete(false);
      })();
    }
    
  }, [isDelete]);


  return (
    <DeleteModal
    setIsOpenDeleteModal={props.setIsOpenDeleteModal}
        deleteModalIsOpen={props.deleteModalIsOpen}
        setisDelete={setisDelete}
    />
  );
};
export default DeleteModalContanier;
