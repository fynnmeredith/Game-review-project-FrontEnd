import { useState, useEffect } from "react";
import { deleteReview, getAllReviews } from "../../utils/api";
import "../AllReviews/AllReviews.css";
import { Link, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { UserContext } from "../../contexts/User";
import { useContext } from "react";
const dayjs = require("dayjs");

const AllReviews = () => {
  const { loggedInUser } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllReviews("created_at", "votes").then((res) => {
      setReviews(res);
      setIsLoading(false);
    });
  }, []);

  const handleDelete = (review_id) => {
    deleteReview(review_id).then((res) => {
      const newReviews = reviews.map((review) => {
        return { ...review };
      });
      const updatedReviews = newReviews.filter((review) => {
        return review.review_id !== review_id;
      });
      setReviews(updatedReviews);
    });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    getAllReviews(value).then((res) => {
      setReviews(res);
    });
  };

  return (
    <main>
      <h1 className="titles">Game feed</h1>
      <select
        className="dropDown"
        selected="disabled"
        value="sort feed by"
        onChange={(event) => {
          handleChange(event);
        }}
      >
        {" "}
        <option disabled>sort feed by</option>
        <option value="created_at">most recent</option>
        <option value="votes">votes</option>
        <option value="comment_count">comment count</option>
      </select>
      <div className="wholeFeed">
        {isLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress className="loadingCircle" />
          </Box>
        ) : (
          <ul>
            {reviews.map((review) => {
              return (
                <li className="allReviewList" key={review.review_id}>
                  <div className="allFeedTop">
                    <img
                      className="reviewImg"
                      src={review.review_img_url}
                      alt=""
                    />
                    <div className="allReviewsHeader">
                      <p className="owner">by {review.owner}</p>
                      <p className="title">{review.title}</p>
                      <p className="category">{review.category}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="allFeedBottom">
                    {/* <PatchVotes className="votes" review={review}/> */}
                    <button className="reviewButton">
                      <Link to={`/reviews/${review.review_id}`}>
                        Check out review
                      </Link>
                    </button>
                    <p className="vote">{review.votes} votes</p>
                    <p className="comments">
                      {review.comment_count} comment(s)
                    </p>
                    <div className="delRev">
                    {review.owner === loggedInUser.username ? (
                  <button
                    type="button"
                    className="deleteReview"
                    onClick={() => {
                      handleDelete(review.review_id);
                    }}
                  >
                    Delete review
                  </button>
                ) : null}
                    </div>
                    <p className="date">
                      {dayjs(review.created_at).format("H:mma MMMM D YYYY")}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
};

export default AllReviews;
