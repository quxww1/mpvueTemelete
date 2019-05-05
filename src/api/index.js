import { get, post } from "../utils/request";

export  function getConfig(data) {
  return get({
    url: "config",
    data: data
  });
}
export  function gett(data) {
  return post({
    url: "",
    data: data
  });
}
