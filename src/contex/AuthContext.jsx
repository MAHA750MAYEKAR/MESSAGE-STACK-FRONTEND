import { createContext, useEffect } from 'react';
import { useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //i need access to token and user using context

  const [auth, setAuth] = useState({
    user: null,
    token: null,
    isLoading: true,
  });

  useEffect(() => {
    //get user && token once component load for once for first time
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    //if both are present thn setAuth
    if (user && token) {
      setAuth({
        user: JSON.parse(user), //converting string to object
        token,
        isLoading: false,
      });
        console.log('setAuth in auth contex',setAuth);
        
    }
    else {
      setAuth({
        user: null,
        token: null,
        isLoading: false,
      });
    }
  },
    []);
  
  async function logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

   setAuth({
     user: null,
     token: null,
     isLoading: false,
   });
  }

  return (
    <AuthContext.Provider value={{ auth,setAuth,logOut }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
