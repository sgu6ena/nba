import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playerReducer from "../../modules/players/playerSlice"
import teamReducer from "../../modules/teams/teamSlice"
import userReducer from "../auth"
import {api} from "../../api/api";


const rootReducer = combineReducers({
 playerReducer,
 teamReducer,
 userReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
      middleware: getDefaultMiddleware =>
          getDefaultMiddleware({
              thunk: {
                  extraArgument: api
              }
          })
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type Appstore = ReturnType<typeof setupStore>;
export type AppDispatch = Appstore["dispatch"];
