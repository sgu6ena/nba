import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeam } from "./interfaces/ITeam";

interface TeamState {
  teams: ITeam[];
  isLoading: boolean;
  error: string;
}

const initialState: TeamState = {
  teams: [],
  isLoading: false,
  error: "",
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    teamsFetching(state) {
      state.isLoading = true;
    },
    teamsFetchingSuccess(state, action: PayloadAction<ITeam[]>) {
      state.isLoading = false;
      state.error = "";
      state.teams = action.payload;
    },
    teamsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default teamSlice.reducer;
