import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {ITeam} from "./interfaces/ITeam";
import {api} from "../../api/api";

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

export const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
    const response =  await api.getTeams();
    return await response.data;
})

export const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        // teamsFetching(state) {
        //     state.isLoading = true;
        // },
        // teamsFetchingSuccess(state, action: PayloadAction<ITeam[]>) {
        //     state.isLoading = false;
        //     state.error = "";
        //     state.teams = action.payload;
        // },
        // teamsFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    },
    extraReducers: {
        [fetchTeams.pending.toString()]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        [fetchTeams.rejected.toString()]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchTeams.fulfilled.toString()]: (state, action: PayloadAction<ITeam[]>) => {
            state.isLoading = false;
            state.error = "";
            state.teams = action.payload;
        },
    }
});

export default teamSlice.reducer;
