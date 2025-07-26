import api from "../axios";

export const getMe = async () => await api.get("/auth/me");

export const login = async (data: { email: string; password: string }) =>
  await api.post("/auth/login", { ...data });

export const verify = async (data: { email: string; code: string }) =>
  await api.post("/auth/verify", { ...data });

export const register = async (data: {
  name: string;
  family: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => await api.post("/auth/register", { ...data });
