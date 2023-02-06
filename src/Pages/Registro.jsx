
import React, { useState } from "react";
import { Alert } from "bootstrap";
import Login from "./Login";

function Registro () {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirm, setConfirm] = useState("");
    const[flang, setFlang] = useState(false);
    const[login, setLogin] = useState(true);


   function handleSubmit (e) {
    e.preventDefault();

    if(!email || !password || !confirm){
        setFlang(true);
    }else {
        setFlang(false);
        localStorage.setItem("Email", JSON.stringify(email));
        localStorage.setItem("Password", JSON.stringify(password));

        setLogin(!login)       
    }

   }

   function handleClick () {
    setLogin(!login);
   }

    return(
        <div>

{login ? (
            <form onSubmit={handleSubmit}>
                <h1>Registro</h1>
                <div className="form-group">
                <label>Email</label>
                 <input 
                 type="email"
                 className="form-control"
                 placeholder="ejemplo@gmail.com"
                 onChange={(event) => setEmail(event.target.value)}  />
                 </div>
                 <div className="form-group">
                <label>Contraseña</label>
                 <input 
                 type="password"
                 className="form-control"
                 placeholder="Insertar Contraseña" 
                 onChange={(event) => setPassword(event.target.value)}/>
                 
                 </div>
                 <div className="form-group">
                <label>Confirmar Contraseña</label>
                 <input 
                 type="password"
                 className="form-control"
                 placeholder="Confirme su Contraseña" 
                 onChange={(event) => setConfirm(event.target.value)}/>
                 
                 
                 </div>
                 <button type="submit">Registrar</button>
                 <p onClick={handleClick}>Ya tienes una cuenta {""} para registrarte?</p>

                 {flang && (
                    <Alert>Porfavor revise sus credenciales</Alert>
                 )}
            </form>
              ):(
            <Login></Login>
            )}
        </div>
    )
}

export default Registro;