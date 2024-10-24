/* Login */

import './Login.css';
import { Link } from 'react-router-dom';
import FormPassword from '../components/form/FormPassword';
import FormButtonSubmit from '../components/form/FormButtonSubmit';

export default function Login(){    
    
    return (
        <main>
        <form id='form_data_login'>
            <fieldset id='fieldset_login'>
                <legend id='legend_login'>Login</legend>
                <label className='label_login'>
                    Nombre
                    <input type="text" id="forename" name="forename" maxLength={50} required></input>
                </label>
                <FormPassword />
                <FormButtonSubmit />
            </fieldset>
        </form>
        <Link id='link_registro' to="/registro">Registro</Link>
        </main>
    )
}

