import type { UserResponse } from "@/services/actions";
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";

interface AuthContextType {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
  isLogged: boolean;
  user: UserResponse | null;
  setUser: (user: UserResponse) => void;
  userId: string | null;
  setIdUser: (id: string) => void;
  removeUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(() =>
    localStorage.getItem("token")
  );
  
  const [user, setUserState] = useState<UserResponse | null>(() =>
    JSON.parse(localStorage.getItem("user") ?? "null")
  );
  const [userId, setUserId] = useState<string | null>(null);

  const setToken = (newToken: string) => {
    setTokenState(newToken);
    localStorage.setItem("token", newToken);
  };

  const removeToken = () => {
    setTokenState(null);
    localStorage.removeItem("token");
  };

  const setUser = (data: UserResponse) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUserState(data);
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    setUserState(null);
  };

  const setIdUser = (newId: string) => {
    setUserId(newId);
  };

  const value = useMemo(
    () => ({
      token,
      setToken,
      removeToken,
      isLogged: !!token,
      user,
      setUser,
      userId,
      setIdUser,
      removeUser,
    }),
    [token, user, userId]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
