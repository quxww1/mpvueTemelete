import { get, post } from "../utils/request";
export  function getDetail(data) {
  return get({
    url: "detail",
    data: data
  });
}
