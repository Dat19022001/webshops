import userReduce from "../user/userSlide"
import productSlide from "../product/productSlide"
import productDetail from "../product/productDetail"

const {configureStore} = require('@reduxjs/toolkit')


const rootUser = {
  user: userReduce,
  product: productSlide,
  detail: productDetail,
}

const store = configureStore({
  reducer: rootUser,
})


export default store;