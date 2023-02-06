import React from 'react';
import { BrowserRouter as Router,
Route } from 'react-router-dom';
import Register from './Pages/Registro';
import Login from './Pages/Login';
import Home from "./Pages/Home"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div>
      <Router>
         <Route path="/">
         <Register></Register>
         </Route>
         <Route path="/log">
         <Login></Login>
         </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
      </Router>
       
    </div>
  );
}

export default App;
