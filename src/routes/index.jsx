import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Funcionario from '../pages/funcionario';
import Caminhao from '../pages/caminhao';
import Financiamento from '../pages/caminhao/components/financiamento';
import Seguro from '../pages/caminhao/components/seguro';

const ThisRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funcionario" element={<Funcionario />} />
      <Route path="/caminhao" element={<Caminhao />} />
      <Route path="/financiamento" element={<Financiamento />} />
      <Route path="/seguro" element={<Seguro />} />
    </Routes>
  </Router>
);

export default ThisRoutes;
