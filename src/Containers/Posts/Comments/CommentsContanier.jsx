/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
//import { Context } from "../../../Context/Context";
import { API_URL } from "../../../config/index";
import Comments from "./Comments";

const CommentsContanier = (props) => {
  const [comments, setComments] = useState([]);
  //const [isShowComments, setShow] = useState(false)
 // if (context) setShow(context)
  console.log("postId", props.postId)
  
 useEffect(() => {
   (async () => {
     const result = await axios(`${API_URL}/comments?postId=${props.postId}`);
       setComments(result.data);
    })();
  }, []);

    return <Comments comments={comments} />;
    

};

export default CommentsContanier;


