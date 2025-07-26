import api from "../axios";

export const getEvents = async () => await api.get("/events");

export const getEvent = async (id: string) => await api.get(`/events/${id}`);
