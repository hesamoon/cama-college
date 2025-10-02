import api from "../axios";

export const transferTuum = async (data: { user_id: string; amount: number }) =>
  await api.post("/tuum/transfer", { ...data });
