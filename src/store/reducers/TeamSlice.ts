import { applyMiddleware, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer } from "../../models/IPlayer";

interface TeamState{
    teams: IPlayer[];
    isLoading:boolean;
    error:string;
}

const initialState: TeamState ={
    teams: [],
    isLoading:false,
    error:"",
}

export const teamSlice = createSlice({
    name:'team',
    initialState,
    reducers:{
        getTeams (state, action:PayloadAction<IPlayer[]>){
            state.teams = [];
        }
    }
})

export default teamSlice.reducer;