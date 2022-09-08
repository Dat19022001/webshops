import authenticateApi from '../api/authenticateApi';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');
// const {authenticateApi} = require('../api/authenticateApi');


export const register = createAsyncThunk(
  'user/register',
  async(payload) =>{
    //call api
    const data = await authenticateApi.resgister(payload);

    return data
  }
)
export const login = createAsyncThunk(
  'user/login',
  async(payload) =>{
    //call api
    const data = await authenticateApi.login(payload);
    
    localStorage.setItem('user',JSON.stringify(data.data));
    
    return data.data
  }
)

const userSlice = createSlice({
  name : 'user',
  initialState : {
    current:JSON.parse(localStorage.getItem('user')) || {},
  },
  reducers : {
    logout(state) {
      localStorage.removeItem('user');
      state.current = {};
    }
  },
  extraReducers:{
    [register.fulfilled]: (state, action)=>{
      state.current = action.payload
    },
    [login.fulfilled]: (state, action)=>{
      state.current = action.payload
    }
  }
})

const {actions ,reducer} = userSlice;

export const {logout} = actions

export default reducer;// default export