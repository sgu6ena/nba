import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITeam} from "./interfaces/ITeam";
import {api} from "../../api/api";
import {ITeamsResult} from "./interfaces/ITeamsResult";


interface TeamState {
    teams: ITeam[];
    isLoading: boolean;
    error: string;
    count: number;
}

interface IPage {
    name?: string,
    page?: number,
    size?: number
}

const initialState: TeamState = {
    teams: [],
    isLoading: false,
    error: "",
    count: 0
};


export const fetchTeams = createAsyncThunk(
    'teams/fetchTeams',
    async ({page, size}: IPage) => {
        const response = await api.getTeams(page, size);
        return await response;
    })


export const fetchTeamsByName = createAsyncThunk(
    'teams/fetchTeams',
    async ({name, page, size}: IPage) => {
        const response = await api.getTeamsByName(name, page, size);
        return await response;
    })


export const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTeams.pending.toString()]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        [fetchTeams.rejected.toString()]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchTeams.fulfilled.toString()]: (state, action: PayloadAction<ITeamsResult>) => {
            state.isLoading = false;
            state.error = "";
            state.count = action.payload.count;
            state.teams = action.payload.data;
        },
    }
});

export default teamSlice.reducer;
