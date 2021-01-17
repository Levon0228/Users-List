/** @format */

import React from "react";
import styles from "../Posts.module.css";

const Comments = (props) => {
  const comments = props.comments;
  return comments.map((comment) => (
    <div className={ `comments`} key={comment.id}>
      {comment.body}
    </div>
  ));
};

export default Comments;
