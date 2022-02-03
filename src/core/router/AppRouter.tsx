import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./index";
import { useAuth } from "../auth/user-auth";

const AppRouter: React.FC = () => {

  const auth = useAuth().isAuth;
  
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
