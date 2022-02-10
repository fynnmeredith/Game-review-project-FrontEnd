import { useState, useEffect } from "react";
import { getAllReviews } from "../../utils/api";
import Review from "../Review/Review";
import "../AllReviews/AllReviews.css";
import { Link } from "react-router-dom";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews().then((res) => {
      setReviews(res);
    });
  }, []);

  return (
    <main>
      <div className="titles"></div>
      <ul>
        {reviews.map((review) => {
          return (
            <li className="allReviewList" key={review.review_id}>
              <div className="allFeedTop">
                <img className="reviewImg" src={review.review_img_url} alt="" />
                <div className="allReviewsHeader">
                  <p className="owner">{review.owner}</p>
                  <p className="title">{review.title}</p>
                </div>
              </div>
              <hr />
              <div className="allFeedBottom">
                <p className="date">Posted: {review.created_at}</p>
                <button className="reviewButton">
                  <Link to={`/reviews/${review.review_id}`}>
                    Check out review
                  </Link>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default AllReviews;
