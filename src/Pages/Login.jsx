import React, { useState } from 'react'
import { Alert } from "bootstrap";
import Home from './Home';

function Login() {

  const[emaillog, setEmaillog] = useState("");
  const[passwordlog, setPasswordlog] = useState("");
  const[flag, setFlang] = useState(false);
  const[home, setHome] = useState(true);


  function handleSubmit (e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillog || !passwordlog){
      setFlang(true);
    } else if (passwordlog!== pass || emaillog!==mail){
      setFlang(true)
    }else {
      setHome(!home);
      setFlang(false)
    }

  }

  return (
    <div>
  {home ? (
      <form onSubmit={handleSubmit}>
         <h1>Login</h1>
      <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="ejemplo@gmail.com"
            onChange={(event) => setEmaillog(event.target.value)} />
        </div>
        <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Insertar Contraseña"
              onChange={(event) => setPasswordlog(event.target.value)}/>
          </div>
          <button type="submit">Entrar</button>
          {flag && (
          <Alert>Porfavor revise sus credenciales</Alert>
           )} 
      </form>
      ):(
        <Home></Home>
        )}
    </div>
  )
}

export default Login
