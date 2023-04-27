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
  let dateOrder = order === "Newest" ? "desc" : "asc";
  let request = `/exams?id=${id}`;
  if (location !== "All") {
    request += `&location=${location}`;
  }
  date !== "**/**/****"
    ? (request += `&date=${date}`)
    : (request += `&order=${dateOrder}`);
  return api.get(request).then((response) => {
    return response.data.exams;
  });
};
