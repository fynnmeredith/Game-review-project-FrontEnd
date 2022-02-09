import { useState, useEffect } from "react";
import { getAllReviews } from "../../utils/api";
import Review from "../Review/Review";
import "../AllReviews/AllReviews.css";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews().then((res) => {
      setReviews(res);
    });
  }, []);

  return (
    <main>
      <div className="titles">
      </div>
      <div className="feedWrapper">
        <ul>
          {reviews.map((review) => {
            return (
              <li className="reviewList" key={review.review_id}>
                <div className="feedTop">
                  <img
                    className="reviewImg"
                    src={review.review_img_url}
                    alt=""
                  />
                  <p>
                    {review.owner} {review.title}
                  </p>
                </div>
                <hr />
                <div className="feedBottom">
                  <p>Votes: {review.votes} &emsp; Comments: {review.comment_count}</p>
            
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default AllReviews;
