/** @format */

import React from "react";
import CommentsContanier from "./Comments/CommentsContanier";
import styles from "./Posts.module.css";
import ReactDOM from "react-dom";

const Posts = (props) => {
  const posts = props.posts;
  let is
  props.isShow ? is = false: is = true; 
  console.log("is", is, props)
  const showComments = (e) =>  props.setIsShow(is);

  return (
    <div id="postsContainer" className={styles.postsContanier} >
      <h1> Posts List</h1>
      {posts.map((p) => (
        <div className="contanier">
          <div key={p.id} className={styles.post}>
            {p.body}
          </div>
          <span className={styles.commentsBtn} onClick={(e) => showComments(e)}>
            Comments
          </span>
          <CommentsContanier postId={p.id} isShow={props.isShow} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
