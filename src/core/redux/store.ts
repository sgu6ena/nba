import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playerReducer from "../../modules/players/playerSlice"
import teamReducer from "../../modules/teams/TeamSlice"
import userReducer from "../auth"


const rootReducer = combineReducers({
 playerReducer,
 teamReducer,
 userReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type Appstore = ReturnType<typeof setupStore>;
export type AppDispatch = Appstore["dispatch"];
