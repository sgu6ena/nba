import ApiService from "../../api/api";
import {AppDispatch} from "../../core/redux/store";
import {playerSlice} from "./playerSlice";

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
