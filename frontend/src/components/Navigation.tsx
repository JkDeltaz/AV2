import { useState, type ChangeEvent } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../App.css'
import { useAuth } from '../contexts/AuthContext';


function NavigationComponent() {

  const navigate = useNavigate();
  const location = useLocation();

  const defaultBtn = 'bg-fundo pt-2 pb-2 text-2xl rounded font-mono border-2 border-superficie cursor-pointer text-default min-w-1/10 text-center hover:scale-102 hover:shadow-xl transition'
  const selectedBtn = 'bg-primario pt-2 pb-2 text-2xl rounded font-mono border-2 border-superficie cursor-pointer min-w-1/10 text-center hover:scale-102 hover:shadow-xl transition'

  const { userPermission } = useAuth();

  return (
    <nav className='flex flex-row m-8 mb-0 mt-12 space-x-4'>

        {userPermission === "Administrador" && 
        <NavLink 
            to="/dashboardFuncionarios"
            className={({ isActive }) => 
                isActive ? selectedBtn : defaultBtn
            }
        >
        Funcionários
        </NavLink>
        }

        <NavLink 
            to="/dashboardAeronaves"
            className={({ isActive }) => 
                isActive ? selectedBtn : defaultBtn
            }
        >
        Aeronaves
        </NavLink>


        <NavLink 
            to="/dashboardPecas"
            className={({ isActive }) => 
                isActive ? selectedBtn : defaultBtn
            }
        >
        Peças
        </NavLink>
        
        {location.pathname === "/dashboardAeronaves" && 
        
        <button className='bg-primario font-mono rounded border p-1 px-6 cursor-pointer border-white/10 text-2xl hover:scale-102 transition ml-auto'>
        Adicionar Aeronave
        </button>
        
        }



    </nav>
  )
}

export default NavigationComponent