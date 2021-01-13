/** @format */

import React from "react";
import Comments from "./Comments/Comments";
import styles from "./Posts.module.css";
import ReactDOM from "react-dom";


const Posts = (props) => {
  const posts = props.posts;
  const showComments = () => {
    document.querySelector('#com').classList.toggle(styles.hide)
  } 

  return (
    <div id="postsContainer" className={styles.postsContanier}>
      <h1> Posts List</h1>
      {posts.map((p) => (
        <div>
          <div key={p.id} className={styles.post}>
            {p.body}
          </div>
          <button onClick={(e) => showComments()}>Comments</button>
          <Comments/>
        </div>
      ))}
    </div>
  );
};

export default Posts;
