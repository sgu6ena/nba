import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPlayer} from "./interfaces/IPlayer";
import {api} from "../../api/api";
import {IPlayerResult} from "./interfaces/IPlayerResult";

interface PlayerState {
    players: IPlayer[];
    isLoading: boolean;
    error: string;
    count: number
}
interface IPage {
    page: number,
    size: number,
    name?:string
}
const initialState: PlayerState = {
    players: [],
    isLoading: false,
    error: "",
    count: 0
}
export const fetchPlayers = createAsyncThunk(
    'players/fetchPlayers',
    async ({page, size}: IPage) => {
        const response = await api.getPlayers(page, size);
        return await response;
    })


export const fetchPlayersByName = createAsyncThunk(
    'players/fetchPlayers',
    async ({name, page, size}: IPage) => {
        const response = await api.getPlayersByName(name, page, size);
        return await response;
    })


export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchPlayers.pending.toString()]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        [fetchPlayers.rejected.toString()]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchPlayers.fulfilled.toString()]: (state, action: PayloadAction<IPlayerResult>) => {
            state.isLoading = false;
            state.error = "";
            state.players = action.payload.data;
            state.count= action.payload.count;
        },
    }
})

export default playerSlice.reducer;