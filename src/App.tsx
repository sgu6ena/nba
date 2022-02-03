import React from "react";
import {Provider} from "react-redux";
import {setupStore} from "./core/redux/store";
import AppRouter from "./core/router/AppRouter";

export const store = setupStore();

function App() {
    return (
        <div className="App" >
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </div>
    );
}

export default App;
