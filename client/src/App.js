import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import ProductDashboard from "./pages/ProductSupplierDashboard";
import SupplierDashboard from "./pages/SupplierDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import ProductForm from "./pages/ProductForm";


//esta seccion lleva a lugares distintos de la pagina , no traen informacion
function App() {
  return (


    <Router>
      <>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/productdashboard" component={ProductDashboard} />
          <Route exact path="/newproduct" component={ProductForm} />
          <Route exact path="/supplierdashboard" component={SupplierDashboard} />
          <Route exact path="/clientdashboard" component={ClientDashboard} />
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
