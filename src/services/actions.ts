import { coscoApi } from "@/api/cosco.api";

type Role = "CUSTOMER" | "OWNER";
export interface PayloadLogin {
  email: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  description?: string;
  role?: Role;
}
interface LoginResponse {
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

interface RegisterResponse {
  username: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  description: string;
  isActive: boolean;
  roles: Role[];
  _id: string;
  __v: number;
  id: string;
}

export const login = async (
  payload: PayloadLogin
): Promise<LoginResponse> => {
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

export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await coscoApi.post<RegisterResponse>("/user", {
    ...payload,
    description: "Default description",
    role: "CUSTOMER",
  });
  return data;
};
