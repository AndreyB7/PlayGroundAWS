import http from "../http-common";

const getAll = () => {
    return http.get("/pokemon");
};
const create = data => {
    return http.post("/pokemon", JSON.stringify(data));
};
const remove = id => {
    return http.delete(`/pokemon/${id}`);
  };

export default {
    getAll,
    create,
    remove
};