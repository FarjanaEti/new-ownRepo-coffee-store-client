import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from './firebase.init';

export const AuthContext=createContext({}); 

const AuthProvider = ({children}) => {
      const [user,setUser]=useState(null)
      const [loading, setLoading]=useState(true)

      const createUser = (email, password) => {
        setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
     }
      const loginUser=(email,password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)                    
      }
      const info={
          user,
          loading,
          createUser ,
          loginUser
      }
 return (
  <AuthContext.Provider value={info}>
    {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;