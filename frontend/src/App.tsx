import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardAeronaves from './pages/DashboardAeronaves';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboardAeronaves" element={<DashboardAeronaves />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>


  )
}

export default App
