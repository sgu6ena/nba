import { createSlice } from "@reduxjs/toolkit";

interface ILogin {
  name: string;
  avatarUrl: string;
  token: string;
}

const initialState: ILogin = {
  name: "",
  avatarUrl: "",
  token: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: ILogin, action) {
      state.name = action.payload.name;
      state.avatarUrl = action.payload.avatarUrl;
      state.token = action.payload.token;
    },
    removeUser(state: ILogin) {
      state.name = "";
      state.avatarUrl = "";
      state.token = "";
    },
  },
});

export const {setUser, removeUser} =userSlice.actions;

export default userSlice.reducer;
