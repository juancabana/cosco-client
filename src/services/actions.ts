import { coscoApi } from "@/api/cosco.api";
import { useAuth } from "@/providers/auth";

type Role = "CUSTOMER" | "OWNER";
export interface LoginPayload {
  email: string;
  password: string;
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

export interface RegisterPayload {
  firstName: string;
  secondName?: string | null;
  lastName: string;
  secondLastName?: string | null;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface RegisterResponse {
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  phoneNumber: string;
  image: string;
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
  password: string;
  phoneNumber: string;
  image: string;
  description: string;
  isActive: boolean;
  roles: Role[];
  __v: number;
}

export interface UpdateUserPayload {
  _id: string;
  image?: string | ArrayBuffer | null;
  description?: string | null;
  firstName?: string | null;
  secondName?: string | null;
  lastName?: string | null;
  secondLastName?: string | null;
}

export interface UpdateUserResponse {
  _id: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  image: string;
  description: string;
  isActive: boolean;
  roles: Role[];
  __v: number;
}
export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await coscoApi.post<LoginResponse>("/auth/login", payload);
  return data;
};

export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await coscoApi.post<RegisterResponse>("/user", payload);
  return { ...data };
};

export const getUser = async (
  id: string,
  callback: (user: UserResponse) => void
): Promise<UserResponse> => {
  const { data } = await coscoApi.get<UserResponse>(`/user/${id}`);
  callback(data);
  return data;
};

export const updateUser = async (
  payload: UpdateUserPayload
): Promise<UpdateUserResponse> => {
  const { _id, ...updatePayload } = payload;
  const { data } = await coscoApi.patch<UpdateUserResponse>(
    `/user/${_id}`,
    updatePayload
  );
  return data;
};
