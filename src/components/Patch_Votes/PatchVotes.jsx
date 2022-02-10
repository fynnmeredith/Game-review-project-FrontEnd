import { useState } from "react";
import { patchVotes } from "../../utils/api";
import './PatchVotes.css'

const PatchVotes = ({ review }) => {
  const [vote, setVote] = useState(0);

  const giveVote = () => {
    setVote((currValue) => {
      return currValue + 1;
    });
    patchVotes(review.review_id, vote);
  };

  return (
    <>
      <button className="upvote" onClick={() => giveVote()}>
        {review.votes + vote} 👍
      </button>
    </>
  );
};

export default PatchVotes;
