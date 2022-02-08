import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getGames } from "../../utils/api";
import { Link } from "react-router-dom";
import "./Games.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Games = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get("category");

  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames(category).then((res) => {
      setGames(res);
    });
  }, [category]);

  // const expandable = ({ children }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  // }

  return (
    <main>
      <h1>{`${category}`}</h1>
      <h2>Games:</h2>
      <div className="feedWrapper">
        <ul>
          {games.map((game) => {
            return (
              <li className="gameList" key={game.review_id}>
                <div className="feedTop">
                  <img className="gameImg" src={game.review_img_url} alt="" />
                  <p className="game_header">
                    {game.owner}:  <Link to={`/reviews/${game.review_id}/comments`}>
                      {game.title}
                    </Link>
                  </p>
                </div>
                <hr />
                <div className="feedBottom">
                  <p>
                    Votes: {game.votes} <button className="upvote">👍</button>
                    <button className="commentButton">comments</button>
                   <div className="date">posted on: {game.created_at.substring(0, 10)}
                   </div>
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
