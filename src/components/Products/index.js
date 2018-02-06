//Depndencies
import React, { Component } from "react";
import superagent from 'superagent';
import { Link } from "react-router-dom";


class Products extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3000/api/product';
        // superagent
        //     .get(url)
        //     .query(null)
        //     .set('Accept', 'application/json')
        //     .end((error, response) => {
        //         console.log(response.body);
        //         //const data = response.body;
        //         this.setState({
        //             data: response.body
        //         })
        //     })
        superagent
            .get(url)
            .then(res => {
                console.log(res.body);
                this.setState({
                    data: res.body
                })
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1>Products</h1>
                <hr/>

                <div className="card-columns">
                    { this.state.data.map(
                        (item, key) => {
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
                                        <Link to={`/product/${item._id}`}>
                                            <button type="button" className="btn btn-primary btn-outline-primary  btn-block"><i className="fas fa-info-circle"></i> Details</button>
                                        </Link>
                                        <button type="button" className="btn btn-secondary btn-outline-success btn-block"><i className="fas fa-cart-plus"></i> Add to Shopping Cart</button>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default Products;