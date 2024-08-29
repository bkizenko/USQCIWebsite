import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase"; // Import the initialized Firebase app

const auth = getAuth(app);

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