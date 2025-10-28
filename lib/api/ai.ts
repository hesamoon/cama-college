import api from "../axios";

export const translateText = async (data: { text: string; lang: string }) =>
  await api.post("/ai/translate", { ...data });

export const summarize = async (content: string) =>
  await api.post("/ai/summarize", { content: content });

export const question = async (text: string) =>
  await api.post("/ai/question", { text: text });
