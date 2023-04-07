import axios from "axios";
export const postRequest = async (
  url = "",
  params,
  successCallback,
  errorCallback,
) => {
  return await axios
    .post(url, params)
    .then((response) => {
      if (successCallback) {
        try {
          successCallback(response);
        } catch (error) {
          console.log("error", error);
        }
      }
    })
    .catch((error) => {
      if (errorCallback)
        try {
          errorCallback(error);
        } finally {
          console.log(error);
        }
    });
};