import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google provider
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //
  // const logIn = (email, password) => {
  //   setLoading(true);
  //   // console.log("login");
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  // Updated logIn function
  const logIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/home"; // Redirect to "/home"
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  // const logOut = () => {
  //   setLoading(true);
  //   // console.log("logout");
  //   return signOut(auth);
  // };

  // Updated logOut function
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error("Error during sign out:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // manage user firebase
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    loading,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
