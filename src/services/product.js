import { postRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";

export const getProduct = async(
  params,
  successCallback,
  errorCallback,
) => {
  await postRequest(apiPath.getProduct,params,successCallback,errorCallback)
}

export const getProductDetail = async(
  params,
  successCallback,
  errorCallback
)=>{
  await postRequest(apiPath.getProductDetail,params,successCallback,errorCallback)
}
