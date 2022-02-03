import ApiService from "../../api/api";
import {AppDispatch} from "../../core/redux/store";
import {teamSlice} from "./TeamSlice";


const api = new ApiService();


export const fetchTeams = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(teamSlice.actions.teamsFetching());
        const response = await api.getTeams();
        dispatch(teamSlice.actions.teamsFetchingSuccess(response.data));
    } catch (err: any) {
        dispatch(teamSlice.actions.teamsFetchingError(err));
    }
};
