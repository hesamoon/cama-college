import api from "../axios";

export const getCompanies = async () => await api.get("/companies");

export const getCompany = async (id: string) =>
  await api.get(`/companies/${id}`);
