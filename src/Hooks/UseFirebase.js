import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import FirebaseAuthentication from "../Firebase/Firebase.init";

FirebaseAuthentication();

const useFirebase = () => {
  const auth = getAuth();

  // All State Here
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  // Signin With Google
  const googleSignin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return { user, googleSignin };
};

export default useFirebase;
