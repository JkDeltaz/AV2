import { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { useAuth } from '../contexts/AuthContext';


function Footer() {
  
    const {userPermission} = useAuth();

    return (
    <div className='p-8 mt-auto'>
        <h1 className='text-default font-mono text-xl'>Usuário : {userPermission}</h1>
    </div>
  )
}

export default Footer