import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import app from "../firebase/firebase.config";
  import {
    GithubAuthProvider,
    GoogleAuthProvider,
  } from "firebase/auth";
  
  export const AuthContext = createContext(null);
  const auth = getAuth(app);
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

  
    const createUser = (email, password) => {
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        setLoading(true)
      return signOut(auth);
    };
    const githubLogin = () => {
        setLoading(true)
      return signInWithPopup(auth, githubProvider);
    };

    const googleLogin = () => {
        setLoading(true)
      return signInWithPopup(auth, googleProvider);
    };
    const updateUserProfile = (obj) => {
        setLoading(true)
        return updateProfile(auth.currentUser, obj)

    }
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
        setUser(currentUser);
      });
      return () => {
        unSubscribe();
      };
    }, []);
    const authInfo = {
      user,
      createUser,
      signIn,
      logOut,
      githubLogin,
      googleLogin,
      loading,
      setLoading,
      updateUserProfile
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;