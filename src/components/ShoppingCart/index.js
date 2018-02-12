//Dependencies
import React, { Component } from "react";
//import { Link } from "react-router-dom";

import ProductController from "../../controllers/productController";
import OrderController from "../../controllers/orderController";

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clientId: "",
            preOrder: [],
            data: [] //para mostrar despues de la consulta individual 
        }
    }

    componentDidMount() {
        this.setState({
            //clientId: "5a74a5141a73970be1779944",
            clientId: "5a80a1b56f68da0890fd4555",
            preOrder: this.props.lista,  //guarda lo que llega de product page
        })

        let prodTemp = [];
        let i = 0;
        for (i in this.props.lista) {
            //console.log("i", i, this.props.lista[i].product);
            let id = `${this.props.lista[i].product}`;
            let url = `http://localhost:3000/api/product/${id}`;
            ProductController.getProduct(url, res => {
                prodTemp.push(res.body);
                console.log("data", prodTemp);
                this.setState({
                    data: prodTemp
                })
            })
        }
    }

    newOrder(e){
        let order = {
            products: this.state.preOrder,
            client_id: this.state.clientId
        }
        let url = 'http://localhost:3000/api/order/';
        OrderController.postOrder(url, order);
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1><i className="fas fa-shopping-cart"></i> Shopping Cart </h1>
                <hr />
                <div className="row">

                    <div className="col-md-9 join-list">
                        {this.state.data.map((item, key1) => {
                            return (

                                <ul className="list-group">
                                    <li key={key1} className="list-group-item data-Center">
                                        <div className="row align-items-center">
                                            <div className="col-2">
                                                <button className="btn btn-outline-danger"> Cancel </button>
                                            </div>
                                            <div className="col-md-2">
                                                <img className="imgSmall" src={item.imageUrl} alt="" />
                                            </div>
                                            <div className="col-4">
                                                <h5>
                                                    Name: <span className="text-muted">{item.name} </span>
                                                </h5>
                                            </div>
                                            <div className="col-4">
                                                <h5>
                                                    Category: <span className="text-muted">{item.category}</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>

                    <div className="col-md-1 join-list">
                        {this.state.preOrder.map((quantity, key2) => {
                            return (
                                <ul className="list-group">
                                    <li key={key2} className="list-group-item li-quantity data-Center">
                                        <span className="badge badge-primary badge-pill">
                                            {quantity.quantity}
                                        </span>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>

                    <div className="col-md-2 data-Center">
                        <button className="btn btn-outline-success" onClick={e => this.newOrder(e)}>Confirm Order</button>
                        <br/>
                        <br/>
                        <h1><i className="fab fa-cc-visa"></i></h1>
                        <h1><i className="fab fa-cc-mastercard"></i></h1>
                        <h1><i className="fas fa-credit-card"></i></h1>
                        <h1><i className="fab fa-cc-paypal"></i></h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;

/* --------------------- PENDIENTE -------------------
- ELIMINAR EN CASO DE NO QUERER PRODUCTO Y ACTUALIZAR lista
- PONER BOTON DE AGREGAR A CARRITO EN PAGINA DEL DETALLE
- CONFIRMAR QUE AL REGRESAR o NAVEGAR NO SE PIERDAN LOS PRODUCTOS 
- VALIDAR AL PEDIR MAS PRODUCTOS DEL STOCK, MOSTRAR MENSAJE
*/
