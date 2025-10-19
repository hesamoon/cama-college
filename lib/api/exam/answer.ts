import api from "../../axios";

export const answer = async (data: {
  session_id: number;
  question_id: number;
  option_id: number;
  text: string;
}) => await api.post("/answers", { ...data });
