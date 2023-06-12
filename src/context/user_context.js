import React, { useContext, useEffect, useReducer, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { user, isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    console.log(`user':${user}`);
    console.log(`isAuthenticated':${isAuthenticated}`);
    console.log(`isLoading':${isLoading}`);
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, myUser, setMyUser }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
