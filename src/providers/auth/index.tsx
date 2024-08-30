import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface AuthContextType {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
  isLogged: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const setToken = (newToken: string) => {
    setTokenState(newToken);
    localStorage.setItem("token", newToken);
  };

  const removeToken = () => {
    setTokenState(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, removeToken, isLogged: !!token }}
    >
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
