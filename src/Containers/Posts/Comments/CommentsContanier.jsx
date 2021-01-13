/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Context } from "../../Context/Context";
import { API_URL } from "../../config/index";
import Comments from "./Comments";

const CommentsContanier = () => {
  const [comments, setComments] = useState([]);
  const { search } = useLocation();
  const [context, setContext] = useContext(Context);
  const userName = context.name;
  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/posts/1/comments`);
      setComments(result.data);
    })();
  }, []);
  return (
    <Comments comments={comments}/>
  );
};

export default CommentsContanier;
