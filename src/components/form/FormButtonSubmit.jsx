/* Botón submit del formulario */

import './Form.css';
import { useNavigate } from 'react-router-dom';

export default function FormButtonSubmit(){
    let navigate = useNavigate();

    function handleClick() {
        navigate("/e-commerce");
    }

    return (
        <button id="button_submit" onClick={handleClick}>Enviar</button>
    )
}

