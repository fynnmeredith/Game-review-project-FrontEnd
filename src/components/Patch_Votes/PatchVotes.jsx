import { useState } from "react";
import { patchVotes } from "../../utils/api";
import "./PatchVotes.css";

const PatchVotes = ({ review }) => {
  const [vote, setVote] = useState(0);

  const giveVote = () => {
    setVote((currValue) => currValue + 1);
    patchVotes(review.review_id, vote);
    review.votes += 1;
    document.getElementById("oneVote").disabled = true;
  };

  return (
    <>
      <button className="upvote" onClick={() => giveVote()} id="oneVote">
        {review.votes} 👍
      </button>
    </>
  );
};

export default PatchVotes;
