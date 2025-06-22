import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup:(emal: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usersDB, setUsersDB] = useState([
    { email: "demo@example.com", password: "password123" },
    { email: "test@user.com", password: "testpass" },
  ]);

  const login = (email: string, password: string): boolean => {
    const match = usersDB.find(
      (u) => u.email === email && u.password === password
    );
    if (match) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string): boolean => {
    const alreadyExists = usersDB.some((u) => u.email === email);
    if (alreadyExists) return false;

    setUsersDB([...usersDB, { email, password }]);
    setIsAuthenticated(true);
    return true;
  };
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
