import api from "../../axios";

export const getQuestions = async () => await api.get("/questions");

export const getOptionsOfQuestion = async (ques_id: number) =>
  await api.get(`/questions/${ques_id}/options`);
