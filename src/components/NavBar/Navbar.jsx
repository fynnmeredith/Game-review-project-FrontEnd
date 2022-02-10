import "../NavBar/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom'
import {UserContext } from '../../contexts/User'
import { useContext } from 'react';

const Navbar = () => {
    const { loggedInUser } = useContext(UserContext)
  return (
    <div className="navbar_container">
      <div className="navbar_left">
        <span className="logo">Boardmasters</span>
      </div>
      <div className="navbar_middle">
        <div className="loggedIn">
          <AccountCircleIcon className="logInIcon"/>
          <p className="searchInput">Logged-in as: { loggedInUser.username }</p>
        </div>
      </div>
      <div className="navbar_right">
        <div className="navbarLinks">
            <div>
                <span className="navbarLink1"><Link to={'/'}>Home</Link></span>
            </div>
          <div>
              <span className="navbarLink1"><Link to="/login">Login</Link></span>
          </div>
          <div className="navbarLink"><Link to="/users">
        <PeopleAltIcon /></Link>
        </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Navbar; 
