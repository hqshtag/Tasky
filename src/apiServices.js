import axios from "axios";

//const email = "wajih.tagourty@gmail.com";
const protocol = "http://";
const baseURL = "localhost:5000/api";
// GET: /tasks ?checked=""&candidate_email=""  POST: /task   PATCH: /check_task/:ids

export const getTasks = async (checked) => {
  let URI = `${protocol}${baseURL}/list`;
  let res = await axios.get(URI);
  return res.data.payload;
};

export const patchTask = async (id) => {
  let URI = `${protocol}${baseURL}/done/${id}`;
  let res = await axios.put(URI);
  return res;
};

export const postTask = async (text) => {
  let URI = `${protocol}${baseURL}/create`;
  let body = {
    text,
  };
  let res = await axios.post(URI, body);
  return res;
};

export const deleteTask = async (id) => {
  let URI = `${protocol}${baseURL}/delete/${id}`;
  let res = await axios.delete(URI);
  return res;
};
