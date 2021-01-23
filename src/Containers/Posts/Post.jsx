/** @format */

import React, { useState } from "react";
import CommentsContanier from "./Comments/CommentsContanier";
import AddEditModalContanier from "./AddPost/AddEditModalContanier";
import styles from "./Posts.module.css";

const Post = (props) => {
  const { post } = props;
  const [isOpen, setisOpen] = useState(false);
  const showComments = () => {
    const flag = isOpen ? false : true;
    setisOpen(flag);
  };
  return (
    <>
      <tr className="contanier">
        <td className={styles.post}>{post.title}</td>
        <td>{post.body}</td>
        <td>
          <button className={styles.Btn} onClick={showComments}>
            Edit
          </button>
          <button className={styles.Btn} onClick={showComments}>
            Delete
          </button>
          <button className={styles.Btn} onClick={showComments}>
            Comments
          </button>
        </td>
      </tr>
      {isOpen ? <CommentsContanier postId={post.id} /> : null}
    </>
  );
};

export default Post;
