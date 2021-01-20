/** @format */

import React, { useState } from "react";
import CommentsContanier from "./Comments/CommentsContanier";
import styles from "./Posts.module.css";

const Post = (props) => {
  const { post } = props;
  const [isOpen, setisOpen] = useState(false);
  const showComments = (e) => {
    const element = e.target;
    const flag = isOpen ? false : true;
    setisOpen(flag);
  };
  return (
    <div className="contanier">
      <div key={post.id} className={styles.post}>
        {post.body}
      </div>
      <span
        className={styles.commentsBtn}
        id={post.id}
        onClick={(e) => showComments(e)}>
        Comments
      </span>
      {isOpen ? <CommentsContanier postId={post.id} /> : null}
    </div>
  );
};

export default Post;
