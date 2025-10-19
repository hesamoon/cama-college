import api from "../axios";

export const getPrograms = async () => await api.get("/programs");

export const getRegisteredPrograms = async () =>
  await api.get("/programs?sort=-created_at&filter[registered]=true");

export const getMinePrograms = async () =>
  await api.get("/programs?filter[mine]=true");

export const getSortedPrograms = async () =>
  await api.get("/programs?sort=-created_at");

export const getProgram = async (id: string) =>
  await api.get(`/programs/${id}`);

// export const getRegisteredPrograms = async () =>
//   await api.get(`/v1/programs/register/asda`);

export const addProgramComment = async ({
  id,
  data,
}: {
  id: string;
  data: { text: string; score: number };
}) => await api.post(`/programs/comment/${id}`, { ...data });
