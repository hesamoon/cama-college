import api from "../axios";

export const getPrograms = async () => await api.get("/programs");

export const getSortedPrograms = async () =>
  await api.get("/programs?sort=-created_at");

export const getProgram = async (id: string) =>
  await api.get(`/programs/${id}`);
