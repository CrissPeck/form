import React, { useState } from 'react'
import { Alert } from "bootstrap";

function Login() {

  const[emaillog, setEmaillog] = useState("");
  const[passwordlog, setPasswordlog] = useState("");
  const[flag, setFlang] = useState(false);

  function handleSubmit (e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillog || !passwordlog){
      setFlang(true);
    } else if (passwordlog!== pass || emaillog!==mail){
      setFlang(true)
    }else {
      /* aqui vas a ingresar el usuario a un estado global para que el componente
       private route o public route redireccione al usuario */
    }

  }

  return (
    <div>
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
    </div>
  )
}

export default Login
