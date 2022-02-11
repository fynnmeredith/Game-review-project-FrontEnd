import { useState, useEffect } from "react";
import { getUsers } from "../../utils/api";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <main>
      <h1 className="usersTitle">Pre-existing users:</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={users.username} className="user_list">
              {user.username}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Users;
