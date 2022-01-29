import { useAuth } from "../../hooks/user-auth";
import {IPlayer} from "../../models/IPlayer";
import ApiService from "../../services/api";
import { AppDispatch } from "../store";
import { playerSlice } from "./PlayerSlice";

export const fetchPlayers = () => async(dispatch:AppDispatch)=>{

   const api = new ApiService();
    try{ 
        dispatch(playerSlice.actions.playersFetching());
        const response = await api.getPlayers();
        console.log(response);
        
        dispatch(playerSlice.actions.playersFetchingSuccess(response.data))
    } catch(err:any){
        dispatch(playerSlice.actions.playersFetchingError(err))
    }
}