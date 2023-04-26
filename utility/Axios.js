import axios from "axios";

const api = axios.create({
  baseURL: "https://victvs-exam-tracker.onrender.com/api",
});

export const getCandidates = () => {
  return api.get(`/candidates`).then((response) => {
    return response.data.candidates;
  });
};
export const getExams = (id, location, date, order) => {
  let request = `/exams?id=${id}`;
  if (location !== undefined) {
    request += `&location=${location}`;
  }
  date !== undefined
    ? (request += `&date=${date}`)
    : (request += `&order=${order}`);
  return api.get(request).then((response) => {
    return response.data.exams;
  });
};
