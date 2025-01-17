import axios from "axios";

let baseUrl = "/api/persons";

const getAll = () => {
  let req = axios.get(baseUrl);
  return req.then((response) => {
    return response.data;
  });
};

const create = (newObject) => {
  let req = axios.post(baseUrl, newObject);
  return req.then((response) => {
    return response.data;
  });
};

const update = (id, newObject) => {
  let req = axios.put(`${baseUrl}/${id}`, newObject);
  return req.then((response) => {
    return response.data;
  });
};

const rem = (id) => {
  axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, rem};
