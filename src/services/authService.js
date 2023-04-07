import { postRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";


export const registerRequest = async (
  params,
  successCallback,
  errorCallback,
) => {
  await postRequest(apiPath.register,params,successCallback,errorCallback)
}

export const loginRequest = async (
  params,
  successCallback,
  errorCallback
) => await postRequest(apiPath.login,params,successCallback,errorCallback)