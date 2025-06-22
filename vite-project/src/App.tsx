import Feed from "./pages/Feed";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function App() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/signin");
  };
  return (
    <div className="text-center">
      {isAuthenticated && (
        <div className="relative">
          <button className="absolute cursor-pointer top-4 right-8" onClick={handleLogout}>
            <img src="/logout.png" alt="logout" className="w-8 h-8" />
          </button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
