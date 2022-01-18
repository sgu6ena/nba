import React from "react";
import { Route, Routes,BrowserRouter  } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import Test from "./pages/Test";


function App() {
  return (

    <div className="App"> 
       <BrowserRouter>    <Routes>
        <Route path="/" element={<Test />} />
        <Route path="about" element={<PageNotFound />} />
      </Routes></BrowserRouter>

    </div>
  );
}

export default App;
