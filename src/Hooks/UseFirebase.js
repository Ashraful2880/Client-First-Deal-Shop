import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import FirebaseAuthentication from "../Firebase/Firebase.init";
import { useAlert } from "react-alert";

FirebaseAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const alert = useAlert();

  // All State Here
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState("");

  // Signin With Google

  const googleSignin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result?.user;
        setUser(googleUser);
        alert.success("Login Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert.error(errorMessage);
      });
  };

  // Register New User

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const repeatPassword = (event) => {
    setRepeatPass(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, repeatPass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({ ...user, displayName: name });
        setName("");
        updateName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    googleSignin,
    handleName,
    handleEmail,
    handlePassword,
    repeatPassword,
    handleRegister,
  };
};

export default useFirebase;
