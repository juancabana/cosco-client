import { coscoApi } from "@/api/cosco.api";

interface Credentials {
  email: string;
  password: string;
}
export interface LoginResponse {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  description: string;
  isActive: boolean;
  roles: string[];
  __v: number;
  token: string;
}

export const login = async (credentials: Credentials) => {
    // TODO: Implement the login function with email and password
  const newCredentials = {
    _id: "66821719afb0f14f96ada214",
    password: "Password123",
  };
  const { data } = await coscoApi.post<LoginResponse>(
    "/auth/login",
    newCredentials
  );
  return data;
};

export const register = async (credentials: any) => {
  
};