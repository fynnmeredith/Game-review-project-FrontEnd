import { useEffect, useState } from "react";
import "./Review.css";
import { useParams } from "react-router-dom";
import { getReviewsbyId } from "../../utils/api";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments"
import PostComment from "../PostComment/PostComment"
import PatchVotes from "../Patch_Votes/PatchVotes";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [isShowing, setIsShowing] = useState(false);


  const [openAddComment, setOpenAddComment] = useState(false)


  const handleCommentClick = () => {
      setIsShowing((currValue) => {
          return !currValue
    })
  }

  const handleAddComment = () => {
    setOpenAddComment((currValue) => {
      return !currValue
    })
  };

  useEffect(() => {
    getReviewsbyId(review_id).then((res) => {
      setReview(res);
    });
  }, [review_id]);

  return (
    <main>
      <h1 className="title">Review</h1>
      <ul>
            <li className="reviewList">
              <div className="feedTop">
                <img className="reviewImg" src={review.review_img_url} alt="" />
                <h3 className="reviewHeader">{review.title}</h3>
              </div>
              <hr className="reviewHr"/>
              <div className="feedMiddle">
                <p>
                  by {review.owner} &emsp; category: {review.category}
                </p>
              </div>
              <div className="reviewBody">
                <p>{review.review_body}</p>
              </div>
              <div className="feedBottom">
                {/* Votes: {review.votes} <button className="upvote">👍</button> */}
                <PatchVotes review={review}/>
                <button className="commentButton" onClick={() => {
                    handleCommentClick()
                }}>
                  Comments {review.comment_count}
                </button>
                {isShowing ? <Comments /> : null }
                <button className="commentButton" onClick={() => {
                  handleAddComment()
                }}>Add comment</button>
                {openAddComment ? <PostComment review={review}/> : null }
              </div>
            </li>
      </ul>
      
    </main>
  );
 
};

export default Review;
