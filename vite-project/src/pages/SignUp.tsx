import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const success = signup(email, password);
    if (success) {
      navigate("/");
    } else {
      alert("User already exists");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-6 rounded shadow w-96"
      >
        <h2 className="text-xl font-bold mb-4">Sign Up as a publisher</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-3"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-3"
          required
        />
        <button className="w-full bg-green-600 text-white py-2 rounded mb-3">
          Sign Up
        </button>
        <a className="text-blue-600 hover:underline" href="/signin">
          Already a user? Sign In
        </a>
      </form>
    </div>
  );
}
