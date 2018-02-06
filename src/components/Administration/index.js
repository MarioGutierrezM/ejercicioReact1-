//Depndencies
import React, { Component } from "react";

import ClientCreate from "../Administration/clientCreate";
import ClientUpdate from "../Administration/clientUpdate";
import ClientDelete from "../Administration/clientDelete";
import ProductCreate from "../Administration/productCreate";
import ProductUpdate from "../Administration/productUpdate";
import ProductDelete from "../Administration/productDelete";


class Admin extends Component {

    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div className="container">
                <br />
                <h1>Administration</h1>
                <hr />

                <br />
                <h3>Products</h3>
                <hr />

                <ProductCreate></ProductCreate>
                <ProductUpdate></ProductUpdate>
                <ProductDelete></ProductDelete>

                <br />
                <h3>Clients</h3>
                <hr />

                <ClientCreate></ClientCreate>
                <ClientUpdate></ClientUpdate>
                <ClientDelete></ClientDelete>

            </div>
        );
    }
}

export default Admin;