import { useState, type ChangeEvent } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import NavigationComponent from '../components/Navigation';
import AeronaveCard from '../components/AeronaveCard';
import CadastroAeronaveModal from '../components/cadastroAeronaveModal';
import { getAeronaves, type Aeronave } from '../data/mock_data';



function DashboardAeronaves() {
  const [selecionado, setSelecionado] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aeronaves, setAeronaves] = useState<Aeronave[]>(
    getAeronaves()
  )


  const salvarAeronave = (aeronave: Aeronave) => {
    setAeronaves([...aeronaves, aeronave])
  }


  return (
    <div className="bg-fundo min-h-screen flex flex-col overflow-x-hidden">
        <Topbar/>
        <NavigationComponent openModal={() => setIsModalOpen(true)}/>


        <CadastroAeronaveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={salvarAeronave}/>

        <div className='m-8 grid grid-cols-4 grid-rows-2 gap-4'>

        {aeronaves.map((objetoAeronave, index) => (
          <AeronaveCard aeronave={objetoAeronave} key={index}/>
        ))}

        </div>  

        

        <Footer/>
    </div>
  )
}

export default DashboardAeronaves