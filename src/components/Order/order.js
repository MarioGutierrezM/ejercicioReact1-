//Depndencies
import React, { Component } from "react";
import superagent from 'superagent';

class Order extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log("order id: ", id);
        const url = `http://localhost:3000/api/order/${id}`;
        superagent
            .get(url)
            .then(res => {
                this.setState({
                    data: res.body
                })
                console.log("Specific Order: ",this.state.data);
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1>Order Details</h1>
                <hr />
                <div className="card border-dark mb-3" >
                    <div className="card-header"><h3>Client Information</h3></div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Name: 
                            <span className="text-muted"> {this.state.data.client_id ? this.state.data.client_id.name : ''} </span> 
                        </h5>
                        <h5 className="card-title">Father's Last Name: 
                            <span className="text-muted">{this.state.data.client_id ? this.state.data.client_id.lastnamefa : ''} </span>
                        </h5>
                        <h5 className="card-title">Mother's Last Name: 
                            <span className="text-muted">{this.state.data.client_id ? this.state.data.client_id.lastnamemo : ''} </span>
                        </h5>
                    </div>
                </div>

                
                <div className="card border-dark mb-3">
                    <div className="card-header"><h3>Products</h3></div>

                    {this.state.data.products ? this.state.data.products.map((product, key) => {
                        return (
                            <div className="card-body text-dark" key={key}> 
                                <h5 className="card-title">Name: 
                                    <span className="text-muted"> {product.name} </span> 
                                </h5>
                                <h5 className="card-title">Description: 
                                    <span className="text-muted"> {product.description} </span> 
                                </h5>
                                <h5 className="card-title">price: 
                                    <span className="text-muted"> {product.price} </span> 
                                </h5>
                                <h5 className="card-title">Quantity: 
                                    {//<span className="text-muted"> {this.state.data.products ? this.state.data.products[key].quantity : ''} </span> 
                                        product.quantity
                                    }
                                </h5>
                            </div>
                        );
                        }) : ''
                    }
                </div>

                <div className="card border-dark mb-3" >
                    <div className="card-header"><h3>Order Information</h3></div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Status: <span className="text-muted"> {this.state.data.status} </span> </h5>
                        <h5 className="card-title">Created At: <span className="text-muted"> {this.state.data.created_at} </span> </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;