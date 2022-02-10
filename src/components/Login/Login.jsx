import { useState } from "react";
import { UserContext } from "../../contexts/User";
import { useContext } from "react";
import Users from "../Users/Users";
import './Login.css'

const Login = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    let value = event.target.value;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedInUser({ username: input });
  };

  return (
    <>
    <div className="logInWarning">
        <p>
            For demo purposes please log in as one of the users below.
        </p>
    </div>
    <Users />
    <form
      className="login"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      {/* <label className="logInLabel">Enter username:</label> */}
      <input
        id="username"
        className="loginInput"
        placeholder="username..."
        type="text"
        value={input}
        onChange={(event) => {
          handleChange(event);
        }}
      ></input>
      <button className="logInButton">Log in</button>
    </form>
    </>
  );
};

export default Login;
