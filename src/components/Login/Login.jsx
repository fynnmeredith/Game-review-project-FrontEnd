import { useState } from "react";
import { UserContext } from "../../contexts/User";
import { useContext } from "react";

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
    <form
      className="login"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <label>Enter username:</label>
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
      <button>Log in</button>
    </form>
  );
};

export default Login;
