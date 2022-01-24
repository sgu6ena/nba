import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Command } from "./pages/Command";
import { CommandList } from "./pages/CommandList";
import Login from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Player } from "./pages/Player";
import { PlayerList } from "./pages/PlayerList";
import Register from "./pages/Register";
import Test from "./pages/Test";
import ApiService from "./services/api";

function App() {
  const api = new ApiService();
  api.getPing().then(console.log);
  api.getVersion().then(console.log)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Test />} />
          <Route path="/commands" element={<CommandList />} />
          <Route path="/command/:id" element={<Command />} />
          <Route path="/commands/test" element={<Command />} />
          <Route path="/players" element={<PlayerList />} />
          <Route path="/players/:id" element={<Player />} />
          <Route path="/players/test" element={<Player />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
