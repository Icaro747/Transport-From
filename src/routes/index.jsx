import React from "react";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";

import Home from "../pages/home";

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
