import { coscoApi } from "@/api/cosco.api";

type Role = "CUSTOMER" | "OWNER";
export interface PayloadLogin {
  email: string;
  password: string;
}

export interface PayloadRegister {
  email: string;
  password: string;
  firstName: string;
  secondName?: string | null;
  lastName: string;
  secondLastName?: string | null;
  phoneNumber: string;
}
export interface LoginResponse {
  _id: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  isActive: boolean;
  token: string;
}

export interface RegisterResponse {
  username: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  description: string;
  isActive: boolean;
  roles: Role[];
  _id: string;
  __v: number;
  id: string;
}

export interface UserResponse {
  _id: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  phoneNumber: string;
  image: string;
  description: string;
  isActive: boolean;
  roles: string[];
  __v: number;
}

export const login = async (payload: PayloadLogin): Promise<LoginResponse> => {
  const { data } = await coscoApi.post<LoginResponse>("/auth/login", payload);
  return data;
};

export const register = async (
  payload: PayloadRegister
): Promise<RegisterResponse> => {
  const { data } = await coscoApi.post<RegisterResponse>("/user", payload);
  return { ...data };
};

export const getUser = async (id: string): Promise<UserResponse> => {
  const { data } = await coscoApi.get<UserResponse>(`/user/${id}`);
  return data;
};
