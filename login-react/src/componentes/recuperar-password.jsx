import React, {useState} from 'react';
import 'firebase/auth';
import *as firebase from 'firebase/app'
import   {BrowserRouter as  Route, Link}   from 'react-router-dom'

export default (props)=>{
    const [email, SetEmail]=useState('');
    const usuario = firebase.auth().currentUser;;
    const resetPasswordEmail = async ()=>{
        var actionCodeSettings = {
            // After password reset, the user will be give the ability to go back
            // to this page.
            url: 'http://localhost:3000/',
            handleCodeInApp: false
          };
        await firebase.auth().sendPasswordResetEmail(
            email, actionCodeSettings)
            .then(function() {
              // Password reset email sent.
            })
            .catch(function(error) {
              // Error occurred. Inspect error.code.
            });
            alert("tu mensaje a sido enviado")
    }

    return(
        <div>
        { !usuario &&
        <div>
            <h2>Restaurar Contraseña mediante envío de Email</h2>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" onChange={(e)=>SetEmail(e.target.value)}/>
        <button onClick={resetPasswordEmail}>Enviar mensaje a Gmail para recuperar contraseña</button>
        </div>
        }
        </div>
    );
}