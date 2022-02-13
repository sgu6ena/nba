import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IPlayer } from "./interfaces/IPlayer";
import {ITeam} from "../teams/interfaces/ITeam";
import {fetchTeams} from "../teams/teamSlice";
import {api} from "../../api/api";

interface PlayerState{
    players: IPlayer[];
    isLoading:boolean;
    error:string;
}

const initialState: PlayerState ={
    players: [],
    isLoading:false,
    error:"",
}
export const fetchPlayers = createAsyncThunk('players/fetchPlayers', async () => {
    const response =  await api.getPlayers();
    return await response.data;
})

export const playerSlice = createSlice({
    name:'player',
    initialState,
    reducers:{
        // playersFetching (state){
        //   state.isLoading = true;
        // },
        // playersFetchingSuccess (state,action: PayloadAction<IPlayer[]>){
        //     state.isLoading = false;
        //     state.error="";
        //     state.players = action.payload;
        // },
        // playersFetchingError (state, action:PayloadAction<string>){
        //     state.isLoading = false;
        //     state.error = action.payload;
        // }
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
        [fetchPlayers.fulfilled.toString()]: (state, action: PayloadAction<IPlayer[]>) => {
            state.isLoading = false;
            state.error="";
            state.players = action.payload;
        },
    }
})

export default playerSlice.reducer;