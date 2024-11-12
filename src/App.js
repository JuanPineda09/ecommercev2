import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CrearCuenta from './components/CrearCuenta';
import DashboardAdmin from './components/DashboardAdmin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/Crear-Cuenta" exact element={<CrearCuenta/>} />
        <Route path="/Dashboard-Administracion" exact element={<DashboardAdmin/>} />
      </Routes>
    </Router>
  );
}

export default App;
