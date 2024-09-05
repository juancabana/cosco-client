import React, { useState, createContext, useContext, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { UserResponse } from "@/services/actions";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/shadcn/ui/toaster";

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
  closeSession: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const queryClient = useQueryClient();

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
    queryClient.invalidateQueries({ queryKey: ["userInfo", data._id] });
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    setUserState(null);
  };

  const closeSession = () => {
    removeToken();
    removeUser();
    queryClient.clear();
  };

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      removeToken,
      isLogged: !!token,
      user,
      setUser,
      userId,
      setIdUser: setUserId,
      removeUser,
      closeSession,
    }),
    [token, user, userId] // Dependencias que cambian el contexto
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
