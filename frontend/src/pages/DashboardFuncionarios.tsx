import { useState } from 'react'
import '../App.css'
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import NavigationComponent from '../components/Navigation';
import { getFuncionarios, type Funcionario } from '../data/mock_data';
import CadastroAeronaveModal from '../components/cadastroAeronaveModal';
import CadastroFuncionarioModal from '../components/CadastroFuncionarioModal';


function DashboardFuncionarios() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>(getFuncionarios());
  const [selecionado, setSelecionado] = useState<Funcionario | null>(null);

  const btnStyle = 'bg-primario font-sans rounded border border-white/10 p-2 px-4 cursor-pointer hover:scale-102 hover:shadow-xl'

  const salvarFuncionario = (funcionario: Funcionario) => {
    setFuncionarios([...funcionarios, funcionario])
  }

  const funcionarioKeys = ['id', 'nome', 'telefone', 'endereco', 'usuario', 'senha', 'nivelPermissao'];
  const fieldLabels: Record<string, string> = {
    nivelPermissao: 'Cargo'
  };

  return (
    <div className="bg-fundo min-h-screen overflow-x-hidden flex flex-col">
        <Topbar/>
        <NavigationComponent openModal={() => {}}/>


        <div className='bg-superficie mx-8 my-6 rounded border border-white/10 p-8 flex-1 flex flex-col'>
            
          <div className='grid grid-cols-7 grid-rows-1 w-7/8 gap-x-8'>

            {funcionarioKeys.map((property: string, index: number) => 
            <div className='flex flex-col gap-y-4' key={index}>
              <h1 className='font-mono text-default text-2xl'>{fieldLabels[property] ?? (property.charAt(0).toUpperCase() + property.slice(1))}</h1>
              {funcionarios.map((funcionario: Funcionario, idx: number) => 
                  <div key={idx}>
                    {property != 'senha' ?
                      <p className='font-mono text-default text-lg truncate hover:whitespace-normal hover:overflow-visible hover:text-clip'>

                        {funcionario[property as keyof Funcionario]}
                        </p>
                      :

                      <p className='font-mono text-default text-lg truncate hover:whitespace-normal hover:overflow-visible hover:text-clip cursor-pointer'
                      onClick={() => selecionado != funcionario ? setSelecionado(funcionario) : setSelecionado(null)}
                      >

                        {selecionado == funcionario ? funcionario[property as keyof Funcionario] : "*********"}
                        </p>
                      
                    }
                  </div>
              )}              
            </div>
            )}              

          </div>

          <div className='flex flex-1'>
              <div className='mt-auto flex flex-1 gap-x-4 justify-end'>
                  <button className={btnStyle}
                  onClick={() => setIsModalOpen(true)}
                  >
                  Cadastrar Funcionário
                  </button>  
              </div>
        
          </div>

        </div>
            
        <CadastroFuncionarioModal isOpen={isModalOpen} onSave={salvarFuncionario} onClose={() => setIsModalOpen(false)}/>
        <Footer/>
    </div>
  )
}

export default DashboardFuncionarios