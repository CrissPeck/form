import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Pages/Registro";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";

const user = false;
// esta variable user tiene que estar en un useState que sea global.
// para poder agregar un usario desde cualquier parte de la App y para poder eliminarlo tambien.

function App() {
  return (
    <div>
      <Router>
        <PublicRoute isAuthenticated={user}>
          <Route exact={true} path="/">
            <Register />
          </Route>
        </PublicRoute>
        <PublicRoute isAuthenticated={user}>
          <Route path="/log">
            <Login />
          </Route>
        </PublicRoute>
        <PrivateRoute isAuthenticated={user}>
          <Route path="/home">
            <Home />
          </Route>
        </PrivateRoute>
      </Router>
    </div>
  );
}

export default App;
