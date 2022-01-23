import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Command } from "./pages/Command";
import { CommandList } from "./pages/CommandList";
import { PageNotFound } from "./pages/PageNotFound";
import { Player } from "./pages/Player";
import { PlayerList } from "./pages/PlayerList";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
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
