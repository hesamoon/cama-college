import api from "../axios";

export const getEvents = async () => await api.get("/events");

export const getSortedEvents = async () =>
  await api.get("/events?sort=-created_at");

export const getEvent = async (id: string) => await api.get(`/events/${id}`);
