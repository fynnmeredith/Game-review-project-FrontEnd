import { useState } from 'react';
import { patchVotes } from '../../utils/api';

const PatchVotes = () => {
    const [vote, setVote] = useState(0);

    const giveVote = () => {
        setVotes((currValue) => {
          currValue + 1;
          patchVotes(votes)
        })
      }

    const handleSubmit = () => {};

    
}

export default PatchVotes;