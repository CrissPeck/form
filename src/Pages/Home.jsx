import React from 'react'

/* en esta pagina tambien necesitamos un botton para poder cerrar la sesion,
cuando se cierre la sesion se elimina al usuario que estaba logeado y el public route 
tiene que redireccionar al usuario a el login */

// 1.  cuando recarge el navegador el estado del usuario no tiene que cambiar.
// 2. tiene que ser responsi.

// ejemplos de mejores alertas: https://sweetalert2.github.io
// mejor usuo de boobstrap: https://react-bootstrap.github.io/

function Home() {
  return (
    <div>
      <h3>Bienvenido</h3>
    </div>
  );
}

export default Home
