import { useState, type ChangeEvent } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import NavigationComponent from '../components/Navigation';
import AeronaveCard from '../components/AeronaveCard';
import CadastroAeronaveModal from '../components/cadastroAeronaveModal';

export interface Etapa {
  id: string;
  nome: string;
  prazo: string;
  status: string;
}

export interface Aeronave {
  codigo: string;
  modelo: string;
  tipo: string;
  capacidade: number;
  alcance: number;
  etapas: Array<Etapa>;
}

function DashboardAeronaves() {
  const [selecionado, setSelecionado] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

const aeronave1 = {
    codigo: 'A001',
    modelo: 'Boeing 737',
    tipo: 'Comercial',
    capacidade: 180,
    alcance: 5000,
    etapas: [
      { id: "1", nome: 'Inspeção de Turbinas', prazo: '10', status: 'Concluída' },
      { id: "2", nome: 'Revisão de Aviônicos', prazo: '20', status: 'Em Andamento' },
      { id: "3", nome: 'Abastecimento', prazo: '30', status: 'Concluída' }
    ]
  };

  const aeronave2 = {
    codigo: 'A002',
    modelo: 'Airbus A320',
    tipo: 'Comercial',
    capacidade: 150,
    alcance: 4000,
    etapas: [
      { id: "1", nome: 'Limpeza Interna', prazo: '15', status: 'Concluída' },
      { id: "2", nome: 'Checklist de Segurança', prazo: '16', status: 'Pendente' }
    ]
  };

  const aeronave3 = {
    codigo: 'A003',
    modelo: 'Cessna 172',
    tipo: 'Militar',
    capacidade: 4,
    alcance: 800,
    etapas: []
  };

  const aeronave4 = {
    codigo: 'A004',
    modelo: 'Embraer E195',
    tipo: 'Comercial',
    capacidade: 120,
    alcance: 3500,
    etapas: [
      { id: "1", nome: 'Troca de Óleo', prazo: '67', status: 'Em Andamento' }
    ]
  };

  const aeronave5 = {
    codigo: 'A005',
    modelo: 'Bombardier CRJ900',
    tipo: 'Militar',
    capacidade: 90,
    alcance: 3000,
    etapas: [
      { id: "1", nome: 'Pintura de Fuselagem', prazo: '13', status: 'Concluída' },
      { id: "2", nome: 'Ajuste de Flaps', prazo: '20', status: 'Concluída' },
      { id: "3", nome: 'Teste de Voo', prazo: '90', status: 'Pendente' }
    ]
  };

  const [aeronaves, setAeronaves] = useState<Aeronave[]>(
    [
    aeronave1, 
    aeronave2, 
    aeronave3, 
    aeronave4, 
    aeronave5
  ])

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