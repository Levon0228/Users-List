/** @format */

import React from "react";
import styles from "./Comments.module.css";

const Comments = (props) => {
  const { comments } = props;
  return <>
  <tr>
    <td>Email</td>
    <td>Comments</td>
  </tr>
    {comments.map((comment) => (
      <tr className={styles.comments} key={comment.id}>
        <td className={styles.commentedUser}>{comment.email}</td>
        <td className={styles.comment} key={comment.id}>
          {comment.body}
        </td>
      </tr>
      ))
    }
  </>
};

export default Comments;
