import axios from "axios";

// Get Apis
export const getFilter = () => {
  var config = {
    method: "get",
    url: "http://localhost:5000/filters",
    headers: {},
  };

  return axios(config);
};

export const getProduct = () => {
  var config = {
    method: "get",
    url: "http://localhost:5000/products",
    headers: {},
  };

  return axios(config);
};
