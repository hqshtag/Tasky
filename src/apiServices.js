import axios from "axios";

const email = "wajih.tagourty@gmail.com";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
const baseURL = "https://autofy-tasky.herokuapp.com/api";
// GET: /tasks ?checked=""&candidate_email=""  POST: /task   PATCH: /check_task/:ids

export const getTasks = async (checked) => {
  let URI = `${corsAnywhere}${baseURL}/tasks?checked=${checked}&candidate_email=${email}`;
  let res = await axios.get(URI);
  return res.data.tasks;
};

export const patchTask = async (id) => {
  let URI = `${corsAnywhere}${baseURL}/check_task/${id}`;
  let res = await axios.patch(URI);
  return res;
};

export const postTask = async (label) => {
  let URI = `${corsAnywhere}${baseURL}/task`;
  let body = {
    candidate_email: email,
    label,
  };
  let res = await axios.post(URI, body);
  return res;
};
