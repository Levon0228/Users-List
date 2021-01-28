/** @format */

import React, { useState } from "react";
import CommentsContanier from "./Comments/CommentsContanier";
import styles from "./Posts.module.css";

// Todo Set to every end row ";" character
const Post = (props) => {
  const { post } = props;
  const [isOpen, setisOpen] = useState(false);
  const showComments = () => {
    const flag = isOpen ? false : true; // Todo simplify this row
    setisOpen(flag);
  };

  const openModal = (e) => {// Todo simplify this row, destructure e
    const { target } = e;
    const { name } = target;
    props.openModal();
    props.setIsEdit(true);
    // Todo do not use name, simple call setPost
    if (name === "edit") props.setPost(post)
  }

  const openDeleteModal = () => {
    props.setPost(post)
    props.openDeleteModal()
  }

  return (
    <>
      <tr className="contanier">
        <td className={styles.post}>{post.title}</td>
        <td>{post.body}</td>
        <td>
          <button className={styles.Btn} name="edit" onClick={openModal} >
            Edit
          </button>
          <button className={styles.Btn} name="delete" onClick={openDeleteModal} >
            Delete
          </button>
          <button className={styles.Btn}  onClick={showComments}>
            Comments
          </button>
        </td>
      </tr>
      {isOpen ? <CommentsContanier postId={post.id} /> : null}
    </>
  );
};

export default Post;
