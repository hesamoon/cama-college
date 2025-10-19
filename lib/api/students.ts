import api from "../axios";

export const getStudents = async () => await api.get("/students");
