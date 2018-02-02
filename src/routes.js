//Dependences
import React from "react";
import {Route, Switch } from "react-router-dom";

//Components
import App from "./components/App";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Products from "./components/Products";
import Product from "./components/Products/product";
import Orders from "./components/Order";
import Order from "./components/Order/order";
import Administration from "./components/Administration";
//Como todos los archivos se llamaron index, no es necesario escribirlos en la ruta de importacion

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/admin" component={Administration} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/order/:id" component={Order} />
            <Route component={Page404} />
        </Switch>
    </App>;

export default AppRoutes;