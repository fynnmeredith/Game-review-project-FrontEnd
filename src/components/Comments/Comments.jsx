import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../utils/api";

const Comments = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((res) => {
      setComments(res);
    });
  }, [review_id]);

  return (
    <main>
      <h1>Reviews</h1>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>User: {comment.author}</h3>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes} <button>upvote</button></p>
              <p className="dates">Posted: {comment.created_at}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Comments;
