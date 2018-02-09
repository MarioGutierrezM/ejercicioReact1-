//Dependencies
import React, {Component} from "react";
//import { Link } from "react-router-dom";

import ProductController from "../../controllers/productController";


class ShoppingCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clientId: "",
            preOrder: []
        }
    }

    componentDidMount(){
        //let preList = this.props;
        this.setState({
            clientId: "5a74a5141a73970be1779944",
            preOrder: this.props.lista
        })

        // let id = "";
        // let url = `http://localhost:3000/api/product/${id}`;
        // ProductController.getProduct(url, res => {

        // }) HACE GET DE LOS PRODUCTOS -----------------------------
    }


    render(){
        return (
            <div className="container">
                <br/>
                <h1><i className="fas fa-shopping-cart"></i> Shopping Cart </h1>
                <hr/>

                <span> {this.state.clientId}</span>
                <span> {this.state.preOrder.map( (item, key) => {
                    return (
                        <p key={key}> {item.product}</p>
                    )
                })}</span>
            </div>
        )
    }
}

export default ShoppingCart;