import React, { useState, createContext, useContext, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { UserResponse } from "@/services/actions";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/shadcn/ui/toaster";

interface AuthContextType {
  token: string | null;
  isLogged: boolean;
  user: UserResponse | null;
  userId: string | null;

  removeToken: () => void;
  removeUser: () => void;
  closeSession: () => void;
  setUser: (user: UserResponse) => void;
  setToken: (token: string) => void;
  setIdUser: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const queryClient = useQueryClient();
  const [token, setTokenState] = useState<string | null>(localStorage.getItem("token"));
  const [user, setUserState] = useState<UserResponse | null>(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null
  );
  const [userId, setUserId] = useState<string | null>(null);

  const isLogged = !!token;

  const setToken = (newToken: string) => {
    setTokenState(newToken);
    localStorage.setItem("token", newToken);
  };

  const removeToken = () => {
    setTokenState(null);
    localStorage.removeItem("token");
  };

  const setUser = (data: UserResponse) => {
    setUserState(data);
    localStorage.setItem("user", JSON.stringify(data));
    queryClient.invalidateQueries({ queryKey: ["userInfo", data._id] });
  };

  const removeUser = () => {
    setUserState(null);
    localStorage.removeItem("user");
  };

  const closeSession = () => {
    removeToken();
    removeUser();
    queryClient.clear();
  };

  const contextValue = useMemo(
    () => ({
      token,
      isLogged,
      user,
      userId,
      setToken,
      removeToken,
      setUser,
      removeUser,
      closeSession,
      setIdUser: setUserId,
    }),
    [token, isLogged, user, userId]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      <ReactQueryDevtools />
      <Toaster />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
