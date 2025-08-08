import api from "../axios";

export const getJobApplications = async () =>
  await api.get("/job-applications");

export const getJobApplication = async (id: string) =>
  await api.get(`/job-applications/${id}`);
