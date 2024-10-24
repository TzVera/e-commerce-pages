/* Mensaje de error */

import React from 'react';
import './Error.css';
import Return from './Return';

export default function Error() {
  return (
    <div className='error_container' >
      <h1>Error: Página no encontrada</h1>
      <Return />
    </div>
  )
}


