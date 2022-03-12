import "../NavBar/Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import { useContext } from "react";

const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setLoggedInUser({ username: value });
  };

  return (
    <div className="navbar_container">
      <div className="navbar_left">
        <span className="logo">Boardmasters</span>
      </div>
      <div className="navbar_middle">
        <div className="loggedIn">
          <AccountCircleIcon className="logInIcon" />
          <p className="searchInput">{loggedInUser.username}</p>
        </div>
      </div>
      <div className="navbar_right">
        <div className="navbarLinks">
          <div>
            <span className="navbarLinkHome">
              <Link to={"/"} className="wut">
                <HomeIcon />
              </Link>
            </span>
          </div>
          <div>
            <select
              className="loginDropDown"
              selected="disabled"
              value="log in as:"
              onChange={(event) => {
                handleOptionChange(event);
              }}
            >
              {" "}
              <option disabled>log in as:</option>
              <option value="jessjelly">jessjelly</option>
              <option value="tickle122">tickle122</option>
              <option value="weegembump">weegembump</option>
              <option value="cooljmessy">cooljmessy</option>
              <option value="happyamy2016">happyamy2016</option>
              <option value="grumpy19">grumpy19</option>
            </select>
          </div>
          <div className="navbarLink">
            <Link to="/postReview">
              <AddIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
