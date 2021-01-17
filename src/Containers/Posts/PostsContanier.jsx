/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../config/index";
import Posts from "./Posts";

const PostsContanier = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [postId, setpostId] = useState(null);
  const [isOpen, setisOpen] = useState(false);



  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/posts${search}`);
      setPosts(result.data);
    })();
  }, []);
  return (
    <Posts posts={posts} isOpen={isOpen} setisOpen={setisOpen} setPosts={setPosts} postId={postId} setpostId={setpostId} />
  );
};

export default PostsContanier;
