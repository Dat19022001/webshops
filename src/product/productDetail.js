const {createSlice} = require("@reduxjs/toolkit")

const productDetail = createSlice({
  name: "detail",
  initialState: {
    productId:"",
    check:false
  },
  reducers:{
    setProductId(state,payload){
      state.productId = payload
      return state
    },
    setCheck(state,payload){
      state.check = payload
    }
  }
})

const {actions,reducer} = productDetail;

export const {setProductId,setCheck} = actions;
export default reducer