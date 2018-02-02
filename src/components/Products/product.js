//Depndencies
import React, { Component } from "react";
import superagent from 'superagent';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        const url = `http://localhost:3000/api/product/${id}`;
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
                <h1>Product: {this.state.data.name}</h1>
                <hr />
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="card-img-top imgBig" src={this.state.data.imageUrl} alt="Card img cap" />
                        </div>
                        <div className="col-md-6 posCent">
                            <div className="card-body">
                                <h3 className="card-title">{this.state.data.name}</h3><br/>
                                <h5 className="card-text">
                                    <i class="fas fa-info"></i>  Description: <small className="text-muted">{this.state.data.description}</small>
                                </h5>
                                <h5 className="card-text">
                                    <i className="fas fa-dollar-sign"></i>  Price: <small className="text-muted">{this.state.data.price}</small>
                                </h5>
                                <h5 className="card-text">
                                    <i class="fas fa-tag"></i> Category: <small className="text-muted">{this.state.data.category}</small><br/>
                                </h5>
                            </div>
                            <div>
                                <button type="button" className="btn btn-secondary btn-outline-success btn-block">
                                    <i className="fas fa-cart-plus"></i> Add to Shopping Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;