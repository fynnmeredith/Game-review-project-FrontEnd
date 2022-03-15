import { useState } from "react";
import { postReview } from "../../utils/api";
import { UserContext } from "../../contexts/User";
import { useContext } from "react";
import "../PostReview/PostReview.css";

const PostReview = () => {
  const { loggedInUser } = useContext(UserContext);
  const [review, setReview] = useState({
    owner: loggedInUser.username,
    title: "",
    designer: "",
    category: "",
    review_body: "",
  });

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setReview((currValue) => {
      const newReview = { ...currValue };
      newReview[key] = value;
      return newReview;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!loggedInUser.username) {
      return;
    }
    postReview(review).then((res) => {
      setReview({
        username: loggedInUser.username,
        title: "",
        designer: "",
        category: "",
        review_body: "",
      });
    });
  };

  return (
    <div className="postReview">
      <div className="owner">
        <h4>Game owner: {loggedInUser.username}</h4>
      </div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="titleInput">
          <h4 className="description">
            Which board game would you like to review?
          </h4>
          <input
            id="title"
            className="titleInput"
            placeholder="game title"
            value={review.title}
            type="text"
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div className="designerInput">
          <h4 className="description">Who designed the board game?</h4>
          <input
            id="designer"
            className="designerInput"
            placeholder="game designer"
            value={review.designer}
            type="text"
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div className="categoryDropDown">
          <h4 className="description">
            Which category does the board game come under?
          </h4>
          <select
            id="category"
            className="cat"
            selected="disabled"
            value={review.category}
            onChange={(event) => handleChange(event)}
          >
            {" "}
            <option disabled>Choose a category:</option>
            <option value="strategy">strategy</option>
            <option value="hidden-roles">hidden-roles</option>
            <option value="dexterity">dexterity</option>
            <option value="push-your-luck">push-your-luck</option>
            <option value="roll-and-write">roll-and-write</option>
            <option value="deck-building">deck-building</option>
            <option value="engine-building">engine-building</option>
          </select>
        </div>
        <div className="review">
          <h4 className="description">Please leave your review below:</h4>
          <textarea
            id="review_body"
            className="review"
            placeholder="review"
            value={review.review_body}
            type="text"
            onChange={(event) => handleChange(event)}
          ></textarea>
        </div>
        <div className="sub">
          <button className="submitButton">submit review</button>
        </div>
      </form>
    </div>
  );
};

export default PostReview;
