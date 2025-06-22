import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load auth status from localStorage on mount
  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  const getUsersFromStorage = (): { email: string; password: string }[] => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  };

  const saveUsersToStorage = (users: { email: string; password: string }[]) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const login = (email: string, password: string): boolean => {
    const usersDB = getUsersFromStorage();
    const match = usersDB.find(
      (u) => u.email === email && u.password === password
    );
    if (match) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string): boolean => {
    const usersDB = getUsersFromStorage();
    const alreadyExists = usersDB.some((u) => u.email === email);
    if (alreadyExists) return false;

    const updatedUsers = [...usersDB, { email, password }];
    saveUsersToStorage(updatedUsers);
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  };

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
