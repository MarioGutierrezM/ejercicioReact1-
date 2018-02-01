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
            <div>
                <br />
                <h1>Products</h1>
                <hr/>
                <br />
                {/* {
                    this.state.data.map(
                        (item, key) => <li key={key}> {item.name}</li>
                    )
                } */}
                <div className="card-columns">
                    {
                        this.state.data.map(
                            (item, key) => {
                                return (
                                    <div className="card" key={key}>
                                        <img className="card-img-top imgMed" src={item.imageUrl} alt="Card img cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Description: <small className="text-muted">{item.description}</small></p>
                                            <p className="card-text">Price: <small className="text-muted">{item.price}</small></p>
                                            <p className="card-text">Category: <small className="text-muted">{item.category}</small></p>
                                        </div>
                                        
                                        <div>
                                        <button type="button" className="btn btn-primary btn-outline-primary  btn-block"><i class="fas fa-info-circle"></i> Details</button>
                                        <button type="button" className="btn btn-secondary btn-outline-success btn-block"><i class="fas fa-cart-plus"></i> Add</button>
                                        </div>
                                        
                                        
                                        
                                    </div>
                                );
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Home;