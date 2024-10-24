/* Botón para volver atrás */

import React from 'react';
import './Return.css';
import { useNavigate } from 'react-router-dom';

export default function Return() {
  const navigate = useNavigate();
  return (
    <div>
      <button className='return' onClick= {() => navigate((-1),{ replace: true })}> Volver atrás </button> 
    </div>
  )
}
