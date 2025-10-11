import api from "../axios";

export const addLike = async (id: string) =>
  await api.post(`/comments/like/${id}`);

export const addDislike = async (id: string) =>
  await api.post(`/comments/dislike/${id}`);
