import { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'


function NavigationComponent() {

  const navigate = useNavigate();
  const defaultBtn = 'bg-fundo p-2 pl-6 pr-6 text-2xl rounded font-mono border-2 border-superficie cursor-pointer text-default'
  const selectedBtn = 'bg-primario p-2 pl-6 pr-6 text-2xl rounded font-mono border-2 border-superficie cursor-pointer'


  return (
    <div className='flex m-8 mt-12'>
        <button 
        className={defaultBtn}>
        Aeronaves</button>
    </div>
  )
}

export default NavigationComponent