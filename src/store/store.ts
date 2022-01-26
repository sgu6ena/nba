import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/PlayerSlice"


const rootReducer = combineReducers({
  playerReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type Appstore = ReturnType<typeof setupStore>;
export type AppDispatch = Appstore["dispatch"];
