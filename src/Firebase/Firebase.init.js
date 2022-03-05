import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";

const FirebaseAuthentication = () => {
  initializeApp(FirebaseConfig);
};

export default FirebaseAuthentication;
