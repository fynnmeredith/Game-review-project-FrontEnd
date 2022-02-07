import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getGames } from "../utils/api";
import { Link } from 'react-router-dom'

const Games = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get('category')

  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames(category).then((res) => {
      setGames(res);
    });
  }, [category]);


  return (
    <main>
      <h1>{`${category}`}</h1>
      <h2>Games:</h2>
      <ul>
        {games.map((game) => {
          return (
            <li key={game.review_id}>
              <h3>
                  <Link to={`/reviews/${game.review_id}/comments`}>{game.title}</Link></h3>
                  <p>Votes:  {game.votes}</p>
                  <img src={game.review_img_url} alt="" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Games;
