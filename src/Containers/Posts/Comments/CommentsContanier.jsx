/** @format */

import React, { useState, useEffect, } from "react";
import axios from "axios";
import { API_URL } from "../../../config/index";
import Comments from "./Comments";

const CommentsContanier = (props) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios(`${API_URL}/comments?postId=${props.postId}`);
      setComments(result.data);
    })();
  }, []);

  return <Comments comments={comments} />;
};

export default CommentsContanier;
