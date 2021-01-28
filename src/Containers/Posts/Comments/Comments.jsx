/** @format */

import React from "react";
import styles from "./Comments.module.css";

// Todo destructure props
const Comments = (props) => {
  const { comments } = props;
  if (comments.length) {
    return (
      <>
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
        ))}
      </>
    );
  } else { // Todo else block not necessary, simple return
    return (
      <tr className={styles.comments}>
        <td></td>
        <td className={styles.commentedUser}> No Comments</td>
      </tr>
    );
  }
};

export default Comments;
