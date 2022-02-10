import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../utils/api";
import { deleteComment } from "../../utils/api";
import "./Comments.css";
import { UserContext } from "../../contexts/User";
import { useContext } from "react";

const Comments = () => {
  const { loggedInUser } = useContext(UserContext);
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    getComments(review_id).then((res) => {
      setComments(res);
    });
  }, [review_id]);

  const handleDelete = (comment_id) => {
    deleteComment(comment_id) .then((res) => {
      const newComments = comments.map((comment) => {
        return { ...comment };
      });
      const updatedComments = newComments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
      setComments(updatedComments);
    })
  }

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
              <div className="commentBottom">
              <p className="dates">Posted: {comment.created_at}</p>
              {comment.author === loggedInUser.username ? (
                      <button
                        type="button"
                        className="delete"
                        onClick={() => {
                          handleDelete(comment.comment_id);
                        }}
                      >
                        Delete comment
                      </button>
                    ) : null}
              </div>
              <hr className="indivHr"/>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Comments;
