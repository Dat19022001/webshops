
const {createSlice} = require("@reduxjs/toolkit")

const productSlice = createSlice({
  name: "product",
  initialState: '',
  reducers:{
    fillProduct(state,payload){
      state = payload
      return state
    },
    resetState(state){
      state = ''
      return state
    }
  }
})

const {actions,reducer} = productSlice;

export const {fillProduct,resetState} = actions;
export default reducer