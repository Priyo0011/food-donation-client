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
import axios from "axios";
  
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
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
          const userEmail = currentUser?.email || user?.email;
          const loggedUser = { email: userEmail };
          setUser(currentUser);
          setLoading(false);
  
          if (currentUser) {
              axios.post('https://food-donation-servers.vercel.app/jwt', loggedUser, { withCredentials: true })
                  .then(res => {
                  })
          }
          else {
              axios.post('https://food-donation-servers.vercel.app/logout', loggedUser, {
                  withCredentials: true
              })
                  .then(res => {
                      console.log(res.data);
                  })
          }
      });
      return () => {
          return unsubscribe();
      }
  }, [])
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