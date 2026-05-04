import { useState, type ChangeEvent } from 'react'
import '../App.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import NavigationComponent from '../components/Navigation';
import type { Aeronave, Etapa } from './DashboardAeronaves';
import Icone from '../components/Icone';
import NovoTesteModal from '../components/novoTesteModal';

function EtapaSelecionada() {

  const location = useLocation();
  const aeronave = location.state?.aeronave;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const btnStyle = 'bg-primario font-sans rounded border border-white/10 p-2 px-4 cursor-pointer hover:scale-102 hover:shadow-xl'

  if (!aeronave) {  
    navigate("/dashboardAeronaves")
  }

  const pegarEtapaAtual = () => {
    for (let i = aeronave.etapas.length - 1; i >= 0; i--) {
      if (aeronave.etapas[i].status === "Em Andamento" || aeronave.etapas[i].status === "Pendente") {
        return aeronave.etapas[i];
      }
    }
    return null;
  };

  const textStyle = `font-mono text-default text-[1.3rem] truncate text-center hover:whitespace-normal hover:overflow-visible hover:text-clip"`
  const imgStyle = `scale-90 hover:scale-102 transition max-w-2/3 mb-auto`
  const containerStyle = `bg-superficie rounded border border-white/10 p-2 flex flex-col items-center`

  console.log(pegarEtapaAtual())

  return (
    <div className="bg-fundo min-h-screen flex flex-col overflow-x-hidden">
        <Topbar/>
        <NavigationComponent openModal={() => {}}/>


        <div className='flex flex-1'>
            <div className='bg-superficie mx-8 my-6 rounded border border-white/10 p-8 flex flex-col flex-1'>

                {pegarEtapaAtual() != null ?
                
                <div>
                    <h1 className='font-mono text-default text-2xl'>Etapa atual: {pegarEtapaAtual().nome}</h1>
                    <h1 className='font-mono text-default text-2xl'>ID: {pegarEtapaAtual().id}</h1>
                    <h1 className='font-mono text-default text-2xl'>Prazo: {pegarEtapaAtual().prazo} dias</h1>
                    <h1 className='font-mono text-default text-2xl'>Status: {pegarEtapaAtual().status}</h1>
                    
                </div>      

                :
                
                <div>
                    <h1 className='font-mono text-default text-2xl'>Nenhuma etapa atualmente pendente ou em andamento.</h1>
                </div>
                
                }

                <div className='flex mt-auto gap-x-4 justify-end'>
                    <button className={btnStyle}
                    >
                    Avançar Etapa
                    </button>

                    <button className={btnStyle}
                    >
                    Visualizar Funcionários
                    </button>  

                    <button className={btnStyle}
                    >
                    Adicionar Funcionário
                    </button>  

                </div>

              
            </div>

        </div>



        <Footer/>
    </div>
  )
}

export default EtapaSelecionada