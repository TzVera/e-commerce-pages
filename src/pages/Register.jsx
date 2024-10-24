/* Registro */

import './Register.css';
import '../components/form/Form.css';
import FormPasswordRegister from '../components/form/FormPasswordRegister';
import FormButtonSubmit from '../components/form/FormButtonSubmit';
import { Link } from 'react-router-dom';

export default function Register(){
   
    return (
        <>
            <form id="form_data_register">
            <fieldset id='fieldset_register'>
                <legend id='legend_register'>Registro</legend>
                
                <label className='label_register'>
                    Nombre
                    <input type="text" id="forename" name="forename" maxLength={50} required></input>
                </label>
                
                <label className='label_register'>
                    Apellido
                    <input type="text" id="surname" name="surname" maxLength={50} required></input>
                </label>
                
                <label className='label_register'>
                    Email
                    <input type="email" id="email" name="email" required></input>
                </label>
                
                <label className='label_register'>
                    Teléfono
                    <input type="tel" id="phoneNumber" name="phoneNumber" minLength={10} maxLength={15} pattern='[0-9]{10,}' required></input>
                </label>
                
                <FormPasswordRegister />
                <FormButtonSubmit id="button_submit"/>
            </fieldset>
        </form>
        <Link id='link_login' to="/login">Login</Link>
        </>
    )
}