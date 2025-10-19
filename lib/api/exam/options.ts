import api from "../../axios";

export const createOption = async (data: {
  question_id: number;
  text: string;
  is_correct: boolean;
}) => await api.post("/options", { ...data });
