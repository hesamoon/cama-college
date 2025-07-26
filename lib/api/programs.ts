import api from "../axios";

export const getPrograms = async () => await api.get("/programs");

export const getProgram = async (id: string) =>
  await api.get(`/programs/${id}`);
