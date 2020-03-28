import React, {useState} from 'react';
import 'firebase/auth';
import *as firebase from 'firebase/app';
import   {BrowserRouter as  Route, Link}   from 'react-router-dom';
import {useFirebaseApp, useUser} from 'reactfire'

export default (props)=>{
    const [email, SetEmail]=useState('');
    const [password, SetPassword]=useState('');
    const firebaseAuth = useFirebaseApp();
    const usuario = useUser();
    console.log("firebase", firebaseAuth);
    console.log("usuario", usuario)

    const submit = async ()=>{
       await firebaseAuth.auth().createUserWithEmailAndPassword(email,password)
       /* await firebaseAuth.auth().signInWithEmailAndPassword(email,password)*/
    }

    const logout = async ()=>{
       await firebase.auth().signOut();
    }

    const singInWithGoogle = async ()=>{
        let provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider)
    }
    const singInWithFacebook = async ()=>{
        let provider = new firebase.auth.FacebookAuthProvider();
        await firebase.auth().signInWithPopup(provider)
    }

    return(
        <div>
        { !usuario && <div>
            <h1>REGISTRAR SESIÓN</h1>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" onChange={(e)=>SetEmail(e.target.value)}/>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" onChange={(e)=>SetPassword(e.target.value)}/>
        <button onClick={submit}>INICIAR SESIÓN</button>
        <p>O</p>
        <button onClick={singInWithGoogle}>GOOGLE</button>
        <button onClick={singInWithFacebook}>FACEBOOK</button>
        <Link to="/login" ><a>Iniciar Sesión</a></Link>
        </div>}
        {
            usuario &&
            <div>
                 <h2>USUARIO: {usuario.email}</h2>
                 <Link to="/actualizar-password" ><a>Actualizar Contraseña</a></Link>
                 <button onClick={logout}>Cerrar sesión</button>
                </div>
        }
         </div>
    );
}