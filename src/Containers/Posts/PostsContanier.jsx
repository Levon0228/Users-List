/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Context } from "../../Context/Context";
import { API_URL } from "../../config/index";
import Posts from "./Posts";

const PostsContanier = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
 // const [context, setContext] = useContext(Context);
  //const userName = context.name;
  const [isShow, setIsShow] = useState(false);



  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/posts${search}`);
      setPosts(result.data);
    })();
  }, []);
  console.log("IN ")
  return (
    <Posts posts={posts} isShow={isShow} setIsShow={setIsShow} />
  );
};

export default PostsContanier;
