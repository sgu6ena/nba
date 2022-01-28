import React from "react";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import AppRouter from "./router/AppRouter";

const store = setupStore();

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
