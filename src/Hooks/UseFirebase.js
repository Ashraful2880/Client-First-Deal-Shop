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
import { useNavigate } from "react-router-dom";

FirebaseAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const alert = useAlert();
  const navigate = useNavigate();

  // All State Here
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [isLoading, setisLoading] = useState(true);

  // Signin With Google

  const googleSignin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result?.user;
        setUser(googleUser);
        alert.success("Login Successful");
        navigate("/home");
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
    if (password === repeatPass) {
      createUserWithEmailAndPassword(auth, email, password, repeatPass)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser({ ...user, displayName: name });
          setName("");
          updateName();
          alert.success("Registration Successful");
          navigate("/home");
        })
        .catch((error) => {
          alert.error(error.message);
        });
    } else {
      alert.error("Password Didn't Match");
    }
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
    setisLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate("/home");
      })
      .catch((error) => {
        alert.error(error.message);
      })
      .finally(() => setisLoading(false));
  };
  // Function For Log out

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        setUser("");
        alert.success("Logout Successfull");
        navigate("/home");
      })
      .catch((error) => {
        alert.error(error.message);
      })
      .finally(() => setisLoading(false));
  };

  // observe user auth state changed or not

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setisLoading(false);
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
    isLoading,
  };
};

export default useFirebase;
