import { useState, useEffect } from "react";
import { getAllReviews } from "../../utils/api";
import Review from "../Review/Review";
import "../AllReviews/AllReviews.css";
import { Link } from "react-router-dom";
import PatchVotes from "../Patch_Votes/PatchVotes";
const dayjs = require('dayjs');

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews('created_at', 'votes').then((res) => {
      setReviews(res);
    });
  }, []);

  const handleChange = (event) => {
    let value = event.target.value
    getAllReviews(value).then((res) => {
      setReviews(res)
    })
  }

  return (
    <main>
      <div className="titles"></div>
      <select className="dropDown" value="" onChange={(event)=> {
          handleChange(event)
      }}>
        {" "}
        <option value="" selected="disabled" disabled>
            sort feed by
          </option>
          <option value="created_at">most recent</option>
          <option value="votes">votes</option>
      </select>
      <ul>
        {reviews.map((review) => {
          return (
            <li className="allReviewList" key={review.review_id}>
              <div className="allFeedTop">
                <img className="reviewImg" src={review.review_img_url} alt="" />
                <div className="allReviewsHeader">
                  <p className="owner">by {review.owner}</p>
                  <p className="title">{review.title}</p>
                  <p className="category">{review.category}</p>
                </div>
              </div>
              <hr />
              <div className="allFeedBottom">
                  {/* <p className="votes">Votes: {review.votes}</p> */}
                  <PatchVotes className="votes" review={review}/>
                <p className="date">{dayjs(review.created_at).format('H:mma MMMM D YYYY')}</p>
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