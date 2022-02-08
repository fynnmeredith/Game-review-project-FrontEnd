import react from "react";
import { useState, useEffect } from "react";
import { getUsers } from '../../utils/api'


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((res) => {
          setUsers(res);
        });
      }, []);

      console.log(users)

      return (
          <main>
              <h1>Users</h1>
              <ul>
                  {users.map((user) => {
                      return <li className="user_list">
                          {user.username}
                      </li>
                  } )}
              </ul>
          </main>
      )
};

export default Users;
