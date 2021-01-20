/** @format */

import React from "react";
import styles from "./Comments.module.css";

const Comments = (props) => {
  const { comments } = props;
  return comments.map((comment) => (
    <div className={styles.comments} key={comment.id}>
      <div className={styles.commentedUser}>{comment.email}</div>
      <div className={styles.comment} key={comment.id}>
        {comment.body}
      </div>
    </div>
  ));
};

export default Comments;
