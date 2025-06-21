import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSignIn}
        className="bg-white p-6 rounded shadow w-96"
      >
        <h2 className="text-xl font-bold mb-4">
          Sign In To publish your posts
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded mb-3">
          Sign In
        </button>
        <a className="text-blue-600" href="/signup">Not a user? Sign Up</a>
      </form>
    </div>
  );
}
