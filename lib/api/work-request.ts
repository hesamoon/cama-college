import api from "../axios";

export const myRequests = async () => await api.get("/work-request");
