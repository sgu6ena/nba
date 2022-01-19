import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Command } from "./pages/Command";
import { CommandList } from "./pages/CommandList";
import { PageNotFound } from "./pages/PageNotFound";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/commands" element={<CommandList />} />
            <Route path="/command/:id" element={<Command />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
