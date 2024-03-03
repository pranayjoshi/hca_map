import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  name: null,
  display_ids: [],
  original_data:[],
};

export const authSlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    setDisplayIds: (state, action) => {
      // console.log(action.payload)
      state.display_ids = action.payload;
    },

    copyOrigData: (state, action) => {
      // console.log(action.payload)
      state.original_data = action.state.display_ids;
    }
    // setLogin: (state, action) => {
      
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    // },
    // setLogout: (state) => {
    //   // console.log("awdada")
    //   state.user = null;
    //   state.token = null;
    // },
    // setPosts: (state, action) => {
    //   state.posts = action.payload.posts;
    // },
  },
});

export const { setToken, setDisplayIds, copyOrigData} =
  authSlice.actions;
export default authSlice.reducer;