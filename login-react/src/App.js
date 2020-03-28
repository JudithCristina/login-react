import React from 'react';
import './App.css';
import Register from './componentes/register';
import Login from './componentes/login';
import RecuperarPassword from './componentes/recuperar-password';
import ActualizarPassword from './componentes/actualizar-password';
import 'firebase/auth';
import *as firebase from 'firebase/app'
import {useFirebaseApp, useUser} from 'reactfire'
import   {BrowserRouter as Router, Route, Switch}   from 'react-router-dom'



function App() {
 const firebaseAuth = useFirebaseApp();
 const usuario = useUser();
const usuarito = firebase.auth().currentUser;
console.log("firebase", firebaseAuth);
console.log("yope", usuario)
console.log("yono", usuarito)

return (
  <Router>
  <Switch>
   <Route exact path="/" component= {Login}/>
   <Route exact path="/login" component= {Login}/>
   <Route exact path="/register" component= {Register}/>
   <Route exact path="/recuperar-password" component= {RecuperarPassword}/>
   <Route exact path="/actualizar-password" component= {ActualizarPassword}/>
 </Switch>
</Router>
)
}


export default App;
