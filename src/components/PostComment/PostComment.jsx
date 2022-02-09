import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../utils/api";
import "../PostComment/PostComment.css";
import {UserContext } from '../../contexts/User'
import { useContext } from 'react';

const PostComment = ({ review }) => {
    const { loggedInUser } = useContext(UserContext)
  const [comment, setComment] = useState({
    username: loggedInUser.username,
    body: "",
  });

  const handleChange = (event) => {
    const key = event.target.id;
    console.log(key)
    const value = event.target.value;
    setComment((currValue) => {
      const newComment = { ...currValue };
      newComment[key] = value;
      console.log(newComment)
      return newComment;
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!loggedInUser.username) {
        return;
      }
    postComment(review.review_id, comment)
    .then((res) => {
        setComment((currValue) => {
          return {
          username: loggedInUser.username,
          body: ""
        }})
      
    }).catch((err) => {
        console.log(err.response.data)
    });
  };
  
  return (
    <form onSubmit={(event) => {
            handleSubmit(event)
    }}>
      <input 
      id="body"
      className="inputComment" 
      placeholder="add a comment..."
      value={comment.body}
      type="text"
      onChange={(event) => {
        handleChange(event);
      }}>
      </input>
      <button className="postButton">Post</button>
    </form>
  );
};

export default PostComment;

