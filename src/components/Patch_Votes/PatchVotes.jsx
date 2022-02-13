import { useState } from "react";
import { patchVotes } from "../../utils/api";
import "./PatchVotes.css";

const PatchVotes = ({ review }) => {
  const [vote, setVote] = useState(0);
  const [minusVote, setMinusVote] = useState(0)

  const giveVote = () => {
    setVote((currValue) => currValue + 1);
    patchVotes(review.review_id, vote);
    review.votes += 1;
    document.getElementById("oneVote").disabled = true;
  };

  const takeVote = () => {
    setMinusVote((currValue) => currValue - 1);
    patchVotes(review.review_id, vote);
    review.votes -= 1;
    document.getElementById("minusVote").disabled = true;
  };

  return (
    <>
    <div className="likeIt">
      <button className="upvote" onClick={() => giveVote()} id="oneVote">
       👍
      </button>
      <p>{review.votes}</p>
      <button className="downvote" onClick={() => takeVote()} id="minusVote">👎</button>

    </div>
    </>
  );
};

export default PatchVotes;
