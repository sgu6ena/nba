import ApiService from "../../services/api";
import { AppDispatch } from "../store";
import { playerSlice } from "./PlayerSlice";
import { teamSlice } from "./TeamSlice";

const api = new ApiService();

export const fetchPlayers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(playerSlice.actions.playersFetching());
    const response = await api.getPlayers();
    dispatch(playerSlice.actions.playersFetchingSuccess(response.data));
  } catch (err: any) {
    dispatch(playerSlice.actions.playersFetchingError(err));
  }
};

export const fetchTeams = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(teamSlice.actions.teamsFetching());
    const response = await api.getTeams();
    dispatch(teamSlice.actions.teamsFetchingSuccess(response.data));
  } catch (err: any) {
    dispatch(teamSlice.actions.teamsFetchingError(err));
  }
};
