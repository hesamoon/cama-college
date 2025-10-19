import api from "../../axios";

export const getExams = async () => await api.get("/exams");

export const createExam = async (data: { program_id: string; name: string }) =>
  await api.post("/exams", { ...data });
