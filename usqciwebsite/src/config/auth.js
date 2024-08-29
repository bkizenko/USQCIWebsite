import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Import the initialized Firebase auth

export const signUpWithEmailPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`Error ${errorCode}: ${errorMessage}`);
    });
};