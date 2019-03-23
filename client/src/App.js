import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Nav from "./components/Nav";
import Register from "./pages/Register";
import Contact from "./pages/Contact/index";
import About from "./pages/About";
import Suppliers from "./pages/Suppliers";
import Buyers from "./pages/Buyers/index";
import Login from "./pages/Login/index";
import NoMatches from "./pages/NoMatches/index";
import ProductClientDashboard from "./pages/ProductClientDashboard";
import ProductSupplierDashboard from "./pages/ProductSupplierDashboard";
import SupplierDashboard from "./pages/SupplierDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import ProductForm from "./pages/ProductForm";
import NavDashboard from "./components/Nav-Dash";

//esta seccion lleva a lugares distintos de la pagina , no traen informacion
function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/suppliers" component={Suppliers} />
          <Route exact path="/buyers" component={Buyers} />
          <Route exact path="/navdashboard" component={NavDashboard} />
          <Route exact path="/productclientdashboard" component={ProductClientDashboard} />
          <Route exact path="/productsupplierdashboard" component={ProductSupplierDashboard} />
          <Route exact path="/addproduct" component={ProductForm} />
          <Route exact path="/supplierdashboard" component={SupplierDashboard}/>
          <Route exact path="/clientdashboard" component={ClientDashboard} />
          
          
          <Route component={NoMatches} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
