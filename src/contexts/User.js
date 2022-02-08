import React from 'react';
import { useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
const [loggedInUser, setLoggedInUser] = useState({
    username: 'weegenbump'
  })

  const isLoggedIn = loggedInUser.username !== undefined

  return (
      <UserContext.Provider value={{loggedInUser, setLoggedInUser, isLoggedIn}}>
      {props.children}
      </UserContext.Provider>
  )
}

