import { coscoApi } from "@/api/cosco.api";

type Role = "CUSTOMER" | "OWNER";
export interface PayloadLogin {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  secondName?: string | null;	
  lastName: string;
  secondLastName?: string | null;
  phoneNumber: string;
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

export const login = async (payload: PayloadLogin): Promise<LoginResponse> => {
  const { data } = await coscoApi.post<LoginResponse>("/auth/login",  payload);
  return data;
};

export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await coscoApi.post<RegisterResponse>("/user", payload);
  return {...data, };
};
