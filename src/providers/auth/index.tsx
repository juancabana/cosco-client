import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  useEffect,
} from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { UserResponse } from "@/services/actions";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/shadcn/ui/toaster";
import { ErrorModalProvider } from "../error";

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

const isBrowser = typeof window !== "undefined";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserResponse | null>(null);
  const [userId, setUserId] = useState<string | null | undefined>(null);

  useEffect(() => {
    if (isBrowser) {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (storedToken) {
        setToken(storedToken);
      }

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setUserId(parsedUser._id);
      }
    }
  }, []);

  const isLogged = !!token;

  const setTokenState = (newToken: string) => {
    setToken(newToken);
    isBrowser && localStorage.setItem("token", newToken);
  };

  const removeToken = () => {
    setToken(null);
    isBrowser && localStorage.removeItem("token");
  };

  const setUserState = (data: UserResponse) => {
    setUser(data);
    isBrowser && localStorage.setItem("user", JSON.stringify(data));
    queryClient.invalidateQueries({ queryKey: ["userInfo", data._id] });
  };

  const removeUser = () => {
    setUser(null);
    setUserId(null);
    isBrowser && localStorage.removeItem("user");
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
        {/* <ReactQueryDevtools /> */}
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
