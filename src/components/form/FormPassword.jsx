/* Contraseña del formulario */

import './Form.css';
export default function FormPassword(){
    return (
        <>
            <label className='label_register' htmlFor="password">Contraseña</label>
            <input type="password" id="password" required></input>
        </>
    )
}