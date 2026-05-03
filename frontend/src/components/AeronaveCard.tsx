import { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import type { Aeronave } from '../pages/DashboardAeronaves';


function AeronaveCard({ aeronave }: { aeronave: Aeronave }) {

  const imgSource = `/${aeronave.tipo}.png`;

  return (
    <div className="bg-superficie rounded border border-white/10 p-2 hover:scale-102 hover:shadow-xl transition">
      <div className='flex flex-row'>
        <div>
          <h1 className="text-default font-mono text-xl">{aeronave.modelo}</h1>
          <h1 className="text-default font-mono">Capacidade: {aeronave.capacidade}</h1>        
          <h1 className="text-default font-mono">Alcance: {aeronave.alcance}</h1>        
          <h1 className="text-default font-mono">Código: {aeronave.codigo}</h1>        
          <h1 className="text-default font-mono">Tipo: {aeronave.tipo}</h1>        
        </div>

        <div className='max-w-1/3 max-h-1/3 ml-auto'>
          <img src={imgSource} alt={aeronave.modelo} 
          className=''
          />
        </div>

      </div>


      <div className='flex flex-row'>
        <button className='bg-primario rounded border border-white/10 p-1 px-4 cursor-pointer ml-auto mr-2'>
          Abrir
        </button>
      </div>

    </div>
  )
}

export default AeronaveCard