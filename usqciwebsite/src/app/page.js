import Image from "next/image";
import { signUpWithEmailPassword } from "../config/auth"; // Import the sign-up function

export default function Home() {
  const handleSignUp = async () => {
    const email = "user@example.com";
    const password = "password123";
    try {
      const user = await signUpWithEmailPassword(email, password);
      console.log("User signed up:", user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div> 
      <h1>trucking</h1>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}