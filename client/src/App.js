import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
//import Example from "./pages/Example";
import Registro from "./pages/Registro";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Suppliers from "./pages/Suppliers";
import Login from "./pages/Login";
import NoMatches from "./pages/NoMatches";
import Nav from "./components/Nav";
import Products from "./pages/Products";


//esta seccion lleva a lugares distintos de la pagina , no traen informacion
function App() {
  return ( 
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
         
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/contact" component={Contact} />
          
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/suppliers" component={Suppliers} />
          <Route exact path="/products" component={Products} />

          <Route component={NoMatches} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
