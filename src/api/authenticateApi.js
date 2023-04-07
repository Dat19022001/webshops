import axiosClient from "../api/axiosClient"


const authenticateApi = {
  login(params) {
    const url = "users/authenticate"
    return axiosClient.post(url, params)
  },

  resgister(params) {
    const url="random/"
    return axiosClient.post(url, params)
  }
}

export default authenticateApi;