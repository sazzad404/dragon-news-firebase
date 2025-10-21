import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // console.log(user, loading);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email ,password)
  }

  const updateUser =(updatedData)=>{
    return updateProfile(auth.currentUser, updatedData)
  }

  const signout = ()=>{
    return signOut(auth)
  }
 

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);


  const authData = {
    user,
    updateUser,
    loading,
    setLoading,
    setUser,
    createUser,
    signIn,
    signout
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
