import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../utils/api";
import "./Comments.css";

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
      <hr className="commentsHr" />
      <h2 className="commentsHeader">Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="commentsList" key={comment.comment_id}>
              <p>{comment.author}:</p>
              <p>{comment.body}</p>
              <div className="votes">
                <p>Votes: {comment.votes}</p>
              </div>
              <p className="dates">Posted: {comment.created_at}</p>
              <hr className="indivHr"/>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Comments;
