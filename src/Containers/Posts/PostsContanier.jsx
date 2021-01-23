/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../config/index";
import Post from "./Post";
import AddEditModalContanier from "./AddPost/AddEditModalContanier";
import styles from "./Posts.module.css";

const PostsContanier = () => {
  const [posts, setPosts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { search } = useLocation();
  const userId = search.substr(search.indexOf("=") + 1, search.length);
  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/posts?userId=${userId}`);
      setPosts(result.data);
    })();
  }, []);

  const openModal = () => setIsOpen(true);

  return (
    <div className={styles.postsContanier} id="postsContanier">
      <AddEditModalContanier
        userId={userId}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        setPosts={setPosts}
        posts={posts}
      />
      <h1> Posts List</h1>
      <div>
        <table id="students">
          <thead>
            <tr>
              <th>Title</th>
              <th>Post</th>
              <th>
                {" "}
                <button onClick={openModal} className={styles.Btn}>
                  Add Post
                </button>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <Post post={p} key={p.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsContanier;
