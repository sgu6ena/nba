import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer } from "./interfaces/IPlayer";

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

export const playerSlice = createSlice({
    name:'player',
    initialState,
    reducers:{
        playersFetching (state){
          state.isLoading = true;
        },
        playersFetchingSuccess (state,action: PayloadAction<IPlayer[]>){
            state.isLoading = false;
            state.error="";
            state.players = action.payload;
        },
        playersFetchingError (state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default playerSlice.reducer;