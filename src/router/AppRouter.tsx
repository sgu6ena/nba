import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from ".";

const AppRouter: React.FC = () => {

  const auth = false;
  return auth ? (
    <BrowserRouter>
      <Routes>
        {privateRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path}/>
        ))}
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={route.element}  key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
