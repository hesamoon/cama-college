import api from "../axios";

export const getCarts = async () => await api.get("/cart");

export const addCart = async (data: {
  cartable_type: string;
  cartable_id: string;
  quantity: number;
}) => await api.post("/cart", { ...data });

export const checkoutCart = async () => await api.post("/cart/checkout");

export const deleteCart = async (id: string) => await api.delete(`/cart/${id}`);
