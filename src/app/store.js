import userReduce from "../user/userSlide"
import productSlide from "../product/productSlide"

const {configureStore} = require('@reduxjs/toolkit')


const rootUser = {
  user: userReduce,
  product: productSlide
}

const store = configureStore({
  reducer: rootUser,
})


export default store;