import React, {useState} from 'react';
import 'firebase/auth';
import *as firebase from 'firebase/app'
import   {BrowserRouter as  Route, Link}   from 'react-router-dom'

export default (props)=>{
    const [email, SetEmail]=useState('');
    const [password, SetPassword]=useState('');
    const [newPassword, SetNewPassword]=useState('');
    const usuario = firebase.auth().currentUser;

    const submit = async ()=>{
        await firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(function(user) {
                    firebase.auth().currentUser.updatePassword(newPassword).then(function(){
                    }).catch(function(err){
                    });
                }).catch(function(err){
                });
                alert("tu contraseña ha sido cambiada")
    }

    const logout = async ()=>{
       await firebase.auth().signOut();
    }

    return(
        <div>
        { usuario &&
        <div>
            <h2>Restaurar Contraseña</h2>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" onChange={(e)=>SetEmail(e.target.value)}/>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" onChange={(e)=>SetPassword(e.target.value)}/>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="newpassword" onChange={(e)=>SetNewPassword(e.target.value)}/>
        <button onClick={submit}>RESTAURAR CONTRASEÑA</button>
        <Link to="/login" > <button onClick={logout}>Cerrar Sesión</button></Link>
        </div>
        }
        </div>
    );
}