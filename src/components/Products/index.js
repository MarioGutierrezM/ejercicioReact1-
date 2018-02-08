//Depndencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import productController from "../../controllers/productController";


class Products extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3000/api/product';
        productController.getAllProducts(url, res => {
            this.setState({
                data: res.body
            })
        });
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1>Products</h1>
                <hr/>

                <div className="card-columns">
                    { this.state.data.map( (item, key) => {
                        return (
                            <div className="card " key={key}>
                                <img className="card-img-top imgMed" src={item.imageUrl} alt="Card img cap" />
                                <div className="card-body">
                                    <h3 className="card-title">{item.name}</h3>
                                    <h5 className="card-text">
                                        <i className="fas fa-dollar-sign"></i> Price: <small className="text-muted">{item.price}</small>
                                    </h5>
                                </div>
                                <div>
                                    <Link to={`/product/${item._id}`} className="withoutLink">
                                        <button type="button" className="btn btn-primary btn-outline-primary  btn-block"><i className="fas fa-info-circle"></i> Details</button>
                                    </Link>
                                    <button type="button" className="btn btn-secondary btn-outline-success btn-block"><i className="fas fa-cart-plus"></i> Add to Shopping Cart</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Products;