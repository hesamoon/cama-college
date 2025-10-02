import api from "../axios";

export const getPrograms = async () => await api.get("/programs");

export const getSortedPrograms = async () =>
  await api.get("/programs?sort=-created_at");

export const getProgram = async (id: string) =>
  await api.get(`/programs/${id}`);

export const getRegisteredPrograms = async () =>
  await api.get(`/v1/programs/register/asda`);
