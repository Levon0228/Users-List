/** @format */

import React from "react";
import CommentsContanier from "./Comments/CommentsContanier";
import styles from "./Posts.module.css";

const Posts = (props) => {
  const posts = props.posts;
  let flag = props.isOpen ? false: true; 
  console.log("flag", flag)
  const showComments = (e) =>  {
    const element = e.target
    console.log("element.id", element.id )
    props.setisOpen(flag)
    props.setpostId(e.target.id);
  } 

  return (
    <div id="postsContainer" className={styles.postsContanier} >
      <h1> Posts List</h1>
      {posts.map((p) => (
        <div className="contanier">
          <div key={p.id} className={styles.post}>
            {p.body}
          </div>
          <span className={styles.commentsBtn} id={p.id} onClick={(e) => showComments(e)}>
            Comments
          </span>
          {props.isOpen ? <CommentsContanier  postId={props.postId}/> : null} 
        </div>
      ))}
    </div>
  );
};

export default Posts;




