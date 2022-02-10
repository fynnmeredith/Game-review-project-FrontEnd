import { useState } from 'react';
import { patchVotes } from '../../utils/api';

const PatchVotes = ({ review }) => {
  console.log(review)
    const [vote, setVote] = useState(0);

const giveVote = () => {
  setVote((currValue) => {
    console.log(currValue)
  return currValue +1;
  })
  patchVotes(review.review_id, vote)
}

    return <button className="upvote" onClick={() => giveVote()}>👍 {review.votes + vote}</button>
}

export default PatchVotes;