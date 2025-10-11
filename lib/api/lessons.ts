import api from "../axios";

export const getLessons = async (id: string) => await api.get(`/lessons/${id}`);