import React, { useState, createContext, useContext, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { UserResponse } from "@/services/actions";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/shadcn/ui/toaster";
import { ErrorModalProvider } from "../error";
import isSSR from "@/utils/isSSR";

interface AuthContextType {
  token: string | null;
  isLogged: boolean;
  user: UserResponse | null;
  userId: string | null | undefined;

  removeToken: () => void;
  removeUser: () => void;
  closeSession: () => void;
  setUserState: (user: UserResponse) => void;
  setTokenState: (token: string) => void;
  setIdUser: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(
    !isSSR() ? null : localStorage.getItem("token")
  );
  const [user, setUser] = useState<UserResponse | null>(
    !isSSR() && localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null
  );
  const [userId, setUserId] = useState<string | null | undefined>(user?._id);

  const isLogged = !!token;

  const setTokenState = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const removeToken = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const setUserState = (data: UserResponse) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    queryClient.invalidateQueries({ queryKey: ["userInfo", data._id] });
  };

  const removeUser = () => {
    setUser(null);
    setUserId(null);
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
      setTokenState,
      removeToken,
      setUserState,
      removeUser,
      closeSession,
      setIdUser: setUserId,
    }),
    [token, isLogged, user, userId]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <ErrorModalProvider>
        {children}
        <ReactQueryDevtools />
        <Toaster />
      </ErrorModalProvider>
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
