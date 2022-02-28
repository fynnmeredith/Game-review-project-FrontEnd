import { useState } from "react";
import { postComment } from "../../utils/api";
import "../PostComment/PostComment.css";
import { UserContext } from "../../contexts/User";
import { useContext } from "react";

const PostComment = ({ review }) => {
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState({
    username: loggedInUser.username,
    body: "",
  });

  const handleChange = (event) => {
    const key = event.target.id;

    const value = event.target.value;
    setComment((currValue) => {
      const newComment = { ...currValue };
      newComment[key] = value;
      return newComment;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!loggedInUser.username) {
      return;
    }
    postComment(review.review_id, comment).then((res) => {
      setComment((currValue) => {
        return {
          username: loggedInUser.username,
          body: "",
        };
      });
    });
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <input
        id="body"
        className="inputComment"
        placeholder="add a comment..."
        value={comment.body}
        type="text"
        onChange={(event) => {
          handleChange(event);
        }}
      ></input>
      <button className="postButton">Post</button>
    </form>
  );
};

export default PostComment;
