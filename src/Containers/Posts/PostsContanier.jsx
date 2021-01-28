/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../config/index";
import Post from "./Post";
import AddEditModalContanier from "./AddPost/AddEditModalContanier";
import DeleteModalContanier from "./DeleteModal/DeleteModalContanier";
import styles from "./Posts.module.css";
// Todo destructure props in all files

// Todo rename Contanier to Container to all files
const PostsContanier = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]); // Todo set post initial value to null, not empty array
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteModalIsOpen, setIsOpenDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { search } = useLocation();
  const userId = search.substr(search.indexOf("=") + 1, search.length);
  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/posts?userId=${userId}`);
      setPosts(result.data);
    })();
  }, []);
  const openModal = () => setIsOpen(true);
  const openDeleteModal = () => setIsOpenDeleteModal(true)

  return (
    <div className={styles.postsContanier} id="postsContanier">
      <AddEditModalContanier
        userId={userId}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        setPosts={setPosts}
        posts={posts}
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        post={post}
      />
      <DeleteModalContanier
        setIsOpenDeleteModal={setIsOpenDeleteModal}
        deleteModalIsOpen={deleteModalIsOpen}
        post={post}
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
              <Post setIsEdit={setIsEdit} setPost={setPost} openDeleteModal={openDeleteModal} openModal={openModal} post={p} key={p.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsContanier;
