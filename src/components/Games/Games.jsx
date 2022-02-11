import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getGames } from "../../utils/api";
import { Link } from "react-router-dom";
import "./Games.css";
const dayjs = require('dayjs');

const Games = () => {
  let [searchParams] = useSearchParams();
  let category = searchParams.get("category");

  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames(category).then((res) => {
      setGames(res);
    });
  }, [category]);

  return (
    <main className="gamesContainer">
      <h1 className="title">{`${category}`} games</h1>
      <h2 className="title">
        Browse categorised boardgames and check out the reviews!
      </h2>
      <div className="feedWrapper">
        <ul>
          {games.map((game) => {
            return (
              <li className="gameList" key={game.review_id}>
                <div className="feedTop">
                  <img className="gameImg" src={game.review_img_url} alt="" />
                  <p className="game_header">
                    {game.owner}: &emsp;
                    {game.title}
                  </p>
                </div>
                <hr />
                <div className="feedBottom">
                    <button className="reviewButton">
                      <Link to={`/reviews/${game.review_id}`}>
                        Check out review
                      </Link>
                    </button>
                    {game.votes} votes &emsp;
                   {game.comment_count} comment(s)
                  
                  <p className="date">
                  {dayjs(game.created_at).format('H:mma MMMM D YYYY')}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Games;
