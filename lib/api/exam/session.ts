import api from "../../axios";

export const createSession = async (data: { exam_id: number }) =>
  await api.post("/sessions", { ...data });
