import { coscoApi } from "@/api/cosco.api";

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
  image: string;
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
}
export interface UploadPostPayload {
  id: string;
  title: string;
  product: string;
  department: string;
  city: string;
  stock: number;
  massUnit: string;
  price: number;
  category: string;
  description: string;
  images: string[];
}

export interface UploadPostResponse {
  owner: string;
  title: string;
  product: string;
  department: string;
  city: string;
  stock: number;
  massUnit: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  _id: string;
  createdAt: Date;
}

export interface UserCropResponse {
  _id: string;
  owner: Owner;
  title: string;
  product: string;
  department: string;
  city: string;
  stock: number;
  massUnit: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  createdAt: Date;
}

export interface PostResponse {
  posts: Post[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface Post {
  _id: string;
  owner: Owner;
  title: string;
  product: string;
  department: string;
  city: string;
  stock: number;
  massUnit: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  createdAt: Date;
}

export interface Owner {
  _id: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  phoneNumber: string;
  image: string;
  description: string;
  roles: Role[];
}

export interface FavoriteResponse {
  _id: string;
  owner: Owner;
  title: string;
  product: string;
  department: string;
  city: string;
  stock: number;
  massUnit: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  createdAt: Date;
  __v: number;
}

export interface SetFavoritePayload {
  userId: string;
  postId: string;
}

export interface GetAllCropsPayload {
  limit: number;
  offset: number;
  category?: string;
  department?: string;
  city?: string;
  title?: string;
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

export const uploadCrop = async (
  payload: UploadPostPayload
): Promise<UploadPostResponse> => {
  const { id, ...postPayload } = payload;
  const { data } = await coscoApi.post<UploadPostResponse>(
    `/post/${payload.id}`,
    postPayload
  );
  return data;
};

export const getUserCrops = async (id: string): Promise<UserCropResponse[]> => {
  const { data } = await coscoApi.get<UserCropResponse[]>(`/post/user/${id}`);
  return data;
};

export const getAllCrops = async (
  payload: GetAllCropsPayload
): Promise<PostResponse> => {
  const { data } = await coscoApi.get<PostResponse>(`/post`, {
    params: {
      ...payload,
    },
  });
  return data;
};

export const setFavorite = async ({
  postId,
  userId,
}: SetFavoritePayload): Promise<string> => {
  const { data } = await coscoApi.post<string>(
    `/user/favorite/${userId}/${postId}`,
    {
      userId,
    }
  );
  return data;
};

export const getFavorites = async (
  userId: string
): Promise<FavoriteResponse[]> => {
  const { data } = await coscoApi.get<FavoriteResponse[]>(
    `/post/favorite/${userId}`
  );
  return data;
};

export const deleteCrop = async (id: string): Promise<string> => {
  const { data } = await coscoApi.delete<string>(`/post/${id}`);
  return data;
};

export const updateCrop = async (
  id: string,
  payload: Partial<UploadPostPayload>
): Promise<UploadPostResponse> => {
  const { data } = await coscoApi.patch<UploadPostResponse>(
    `/post/${id}`,
    payload
  );
  return data;
};
