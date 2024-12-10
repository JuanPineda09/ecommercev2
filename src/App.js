import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CrearCuenta from './components/CrearCuenta';
import DashboardAdmin from './components/DashboardAdmin';
import AdminHome from './components/adminComponents/AdminHome';
import AdminProductos from './components/adminComponents/AdminProductos';
import AdminCategorias from './components/adminComponents/AdminCategorias';
import AdminUsuarios from './components/adminComponents/AdminUsuarios';
import AdminOfertas from './components/adminComponents/AdminOfertas';
import AdminPedidos from './components/adminComponents/AdminPedidos';
import AdminVentas from './components/adminComponents/AdminVentas';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/Crear-Cuenta" exact element={<CrearCuenta/>} />
        <Route path="/Dashboard-Administracion" exact element={<DashboardAdmin/>}>
          <Route path="AdminHome" exact element={<AdminHome/>}/>
          <Route path="AdminUsuarios" exact element={<AdminUsuarios/>}/>
          <Route path="AdminCategorias" exact element={<AdminCategorias/>}/>
          <Route path="AdminProductos" exact element={<AdminProductos/>}/>
          <Route path="AdminOfertas" exact element={<AdminOfertas/>}/>
          <Route path="AdminPedidos" exact element={<AdminPedidos/>}/>
          <Route path="AdminVentas" exact element={<AdminVentas/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
