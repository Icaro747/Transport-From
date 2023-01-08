import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Funcionario from '../pages/funcionario';
import Caminhao from '../pages/caminhao';

const ThisRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funcionario" element={<Funcionario />} />
      <Route path="/caminhao" element={<Caminhao />} />
    </Routes>
  </Router>
);

export default ThisRoutes;
