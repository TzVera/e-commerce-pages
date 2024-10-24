/* Datos relacionados a la contraseña del usuario (Contraseña, Confirmar contraseña) */

import FormPassword from "./FormPassword"

export default function FormPasswordRegister(){
    return (
        <>
            <FormPassword />
            <label className='label_register'>
                Confirmar Contraseña
                <input type="password" id="confirmPassword" name="confirmPassword" required></input>
            </label>    
        </>
    )
}