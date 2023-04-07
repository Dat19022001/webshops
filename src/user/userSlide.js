const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem("user")) || {},
  },
  reducers: {
    insertUser(state, payload) {
      state.current = payload;
      return state;
    },
    logout(state) {
      localStorage.removeItem("user");
      state.current = {};
    },
  },
});

const { actions, reducer } = userSlice;

export const { logout,insertUser } = actions;
export default reducer;
