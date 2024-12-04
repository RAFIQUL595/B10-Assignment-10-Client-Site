import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.info";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Register With Email and Password
  const handelEmailLog = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUser = (name, photo) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      return updateProfile(currentUser, {
        displayName: name,
        photoURL: photo,
      }).then(() => {
        setUser({
          ...currentUser,
          displayName: name,
          photoURL: photo,
        });
      });
    }
  };

  // Log out function using Firebase Auth
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("You have logged out successfully!");
        setUser(null);
      })
      .catch((error) => {
        toast.error("Failed to log out. Please try again.");
        setError(error.message);
      });
  };

  useEffect(() => {
    // Firebase auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup the auth listener when component is unmounted
    return () => unsubscribe();
  }, []);

  const authInfo = {
    handelEmailLog,
    updateUser,
    user,
    logout,
    loading,
    error,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
