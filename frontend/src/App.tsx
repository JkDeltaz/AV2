import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardAeronaves from './pages/DashboardAeronaves';
import DashboardFuncionarios from './pages/DashboardFuncionarios';
import DashboardPecas from './pages/DashboardPecas';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboardAeronaves" element={<DashboardAeronaves />} />
      <Route path="/dashboardFuncionarios" element={<DashboardFuncionarios />} />
      <Route path="/dashboardPecas" element={<DashboardPecas />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>


  )
}

export default App
