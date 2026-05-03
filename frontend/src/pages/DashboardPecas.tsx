import { useState, type ChangeEvent } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import NavigationComponent from '../components/Navigation';


function DashboardPecas() {

  const [selecionado, setSelecionado] = useState(0);

  return (
    <div className="bg-fundo h-screen w-screen flex flex-col">
        <Topbar/>

        <NavigationComponent/>

        <Footer/>
    </div>
  )
}

export default DashboardPecas