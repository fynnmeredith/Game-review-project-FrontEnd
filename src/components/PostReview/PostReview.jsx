import { useState } from "react";
import { postReview } from "../../utils/api";
import { UserContext } from "../../contexts/User";
import { useContext } from "react";
import "../PostReview/PostReview.css";

const PostReview = () => {
  const { loggedInUser } = useContext(UserContext);
  const [review, setReview] = useState({
    owner: loggedInUser.username,
  });

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setReview((currValue) => {
      const newReview = { ...currValue };
      newReview[key] = value;
      console.log(newReview);
      return newReview;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!loggedInUser.username) {
      return;
    }
    postReview(review).then((res) => {
      setReview((currValue) => {
        return {
          username: loggedInUser.username,
        };
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
          <input
            id="title"
            className="titleInput"
            placeholder="game title"
            value={review.title}
            type="text"
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div className="review">
          <textarea
            id="review_body"
            className="review"
            placeholder="review"
            value={review.review_body}
            type="text"
            onChange={(event) => handleChange(event)}
          ></textarea>
        </div>
        <div className="designerInput">
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
          <select
            id="category"
            className="categoryDropDown"
            selected="disabled"
            value={review.category}
            onChange={(event) => handleChange(event)}
          >
            {" "}
            <option disabled>pick a category:</option>
            <option value="stategy">stategy</option>
            <option value="hidden-roles">hidden-roles</option>
            <option value="dexterity">dexterity</option>
            <option value="push-your-luck">push-your-luck</option>
            <option value="roll-and-write">roll-and-write</option>
            <option value="deck-building">deck-building</option>
            <option value="engine-building">engine-building</option>
          </select>
        </div>
        <div className="submitButton">
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default PostReview;
