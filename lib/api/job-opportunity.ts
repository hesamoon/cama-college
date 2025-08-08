import api from "../axios";

export const getJobOpportunities = async () =>
  await api.get("/job-opportunities");

export const getJobOpportunity = async (id: string) =>
  await api.get(`/job-opportunities/${id}`);

export const applyForJobOpportunity = async (id: string, data: FormData) =>
  await api.post(`/job-opportunities/apply/${id}`, data);
