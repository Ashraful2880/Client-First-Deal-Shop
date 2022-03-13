import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
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
  const [demoLoading, setDemoLoading] = useState(true);

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
        alert.success("Registration Successful");
      })
      .catch((error) => {
        alert.error(error.message);
      });
  };

  // Update User Name By Email registration

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        alert.error(error.message);
      });
  };
  // Login in Existing User By Email & Password

  const handleSignIn = (event) => {
    event.preventDefault();
    setDemoLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        alert.error(error.message);
      })
      .finally(() => setDemoLoading(false));
  };
  // Function For Log out

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        setUser("");
        alert.success("Logout Successfull");
      })
      .catch((error) => {
        alert.error(error.message);
      })
      .finally(() => setDemoLoading(false));
  };

  // observe user auth state changed or not

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setDemoLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    user,
    googleSignin,
    handleName,
    handleEmail,
    handlePassword,
    repeatPassword,
    handleRegister,
    handleSignIn,
    handleSignOut,
  };
};

export default useFirebase;
