import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Funcionario from "./pages/funcionario";
import Home from "./pages/home";


function App() {
  return (
    //Rotas
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/funcionario" element={<Funcionario/>}/>
      </Routes>
    </Router>
  );
}

export default App;
