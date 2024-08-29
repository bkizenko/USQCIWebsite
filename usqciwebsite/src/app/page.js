import Image from "next/image";
import SignUpForm from "../components/SignUpForm"; // Import the SignUpForm component

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SignUpForm />
    </div>
  );
}