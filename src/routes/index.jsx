import React from "react";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";

import Home from "../pages/home";
//import Sobre from "./Sobre";
//import Usuario from "./Usuario";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={Home} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
