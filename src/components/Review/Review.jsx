import { useEffect, useState } from "react";
import "./Review.css";
import { useParams } from "react-router-dom";
import { getReviewsbyId } from "../../utils/api";
import Comments from "../Comments/Comments";
import PostComment from "../PostComment/PostComment";
import PatchVotes from "../Patch_Votes/PatchVotes";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const dayjs = require("dayjs");

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [openAddComment, setOpenAddComment] = useState(false);

  const handleCommentClick = () => {
    setIsShowing((currValue) => {
      return !currValue;
    });
  };

  const handleAddComment = () => {
    setOpenAddComment((currValue) => {
      return !currValue;
    });
  };

  useEffect(() => {
    getReviewsbyId(review_id).then((res) => {
      setReview(res);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <main className="reviewContainer">
      <h1 className="title">Review</h1>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress className="loadingCircle" />
        </Box>
      ) : (
        <ul>
          <li className="reviewList">
            <div className="feedTop">
              <img className="reviewImg" src={review.review_img_url} alt="" />
              <h3 className="reviewHeader">{review.title}</h3>
            </div>
            <hr className="reviewHr" />
            <div className="feedMiddle">
              <p>
                by {review.owner} &emsp; category: {review.category} &emsp;{" "}
                {dayjs(review.created_at).format("H:mma MMMM D YYYY")}
              </p>
            </div>
            <div className="reviewBody">
              <p>{review.review_body}</p>
            </div>
            <div className="feedBottom">
              <PatchVotes review={review} />
              <button
                className="commentButton"
                onClick={() => {
                  handleCommentClick();
                }}
              >
                Comments ({review.comment_count})
              </button>
              {isShowing ? <Comments /> : null}
              <button
                className="commentButton"
                onClick={() => {
                  handleAddComment();
                }}
              >
                Add comment
              </button>
              {openAddComment ? <PostComment review={review} /> : null}
            </div>
          </li>
        </ul>
      )}
    </main>
  );
};

export default Review;
