import { useState, type ChangeEvent } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import NavigationComponent from '../components/Navigation';
import AeronaveCard from '../components/AeronaveCard';

export interface Aeronave {
  codigo: string;
  modelo: string;
  tipo: string;
  capacidade: number;
  alcance: number;
}


function DashboardAeronaves() {
  const [selecionado, setSelecionado] = useState(0);

  const aeronave1 = {
    codigo: 'A001',
    modelo: 'Boeing 737',
    tipo: 'Comercial',
    capacidade: 180,
    alcance: 5000
  };

  const aeronave2 = {
    codigo: 'A002',
    modelo: 'Airbus A320',
    tipo: 'Comercial',
    capacidade: 150,
    alcance: 4000
  };

  const aeronave3 = {
    codigo: 'A003',
    modelo: 'Cessna 172',
    tipo: 'Militar',
    capacidade: 4,
    alcance: 800
  };

  const aeronave4 = {
    codigo: 'A004',
    modelo: 'Embraer E195',
    tipo: 'Comercial',
    capacidade: 120,
    alcance: 3500
  };

  const aeronave5 = {
    codigo: 'A005',
    modelo: 'Bombardier CRJ900',
    tipo: 'Militar',
    capacidade: 90,
    alcance: 3000
  };

  const aeronaves: Aeronave[] = [aeronave1, aeronave2, aeronave3, aeronave4, aeronave5];

  return (
    <div className="bg-fundo h-screen w-screen flex flex-col">
        <Topbar/>
        <NavigationComponent/>

        <div className='m-8 grid grid-cols-4 grid-rows-2 gap-4'>

        {aeronaves.map((objetoAeronave) => (
          <AeronaveCard aeronave={objetoAeronave}/>
        ))}

        </div>  



        <Footer/>
    </div>
  )
}

export default DashboardAeronaves