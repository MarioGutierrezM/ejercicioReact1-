//Depndencies
import React, { Component } from "react";
import superagent from 'superagent';
//import { Link } from "react-router-dom";


class Admin extends Component {

    constructor() {
        super();

        this.state = {
            newClient: {}
        }
    }

    componentDidMount() {
     //   const urlProduct = 'http://localhost:3000/api/product/';
    }

    postClient() {
        const urlClient = 'http://localhost:3000/api/client/';
        superagent
            .post(urlClient)
            .send(this.state.newClient)
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
                <h1>Administration</h1>
                <hr />

                <br />
                <h3>Products</h3>
                <hr />
                <div className="alert alert-success" role="alert">
                    Create a product
                </div>
                <div className="alert alert-warning" role="alert">
                    Modify a product
                </div>
                <div className="alert alert-danger" role="alert">
                    Delete a product
                </div>

                <br />
                <h3>Clients</h3>
                <hr />
                <div className="alert alert-success" role="alert">
                    <div>
                        {/*Button trigger modal */}
                        <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal">
                            Create a client
                        </button>

                        {/*Modal */}
                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Create a client</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <form>
                                            <div className="form-group">
                                                <label for="nameClient">First Name</label>
                                                <input type="text" className="form-control" id="nameClient" value={this.state.newClient.name} aria-describedby="nameClient" placeholder="Enter first name"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="nameClient">Father's Last Name </label>
                                                <input type="text" className="form-control" id="nameClient" value={this.state.newClient.lastnamefa} aria-describedby="nameClient" placeholder="Enter a father's lastname"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="nameClient">Mother's Last Name</label>
                                                <input type="text" className="form-control" id="nameClient" value={this.state.newClient.lastnamemo} aria-describedby="nameClient" placeholder="Enter mother's last name"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="nameClient">Birthdate</label>
                                                <input type="text" className="form-control" id="nameClient" value={this.state.newClient.birthdate} aria-describedby="nameClient" placeholder="Enter a birthdate"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="nameClient">Address</label>
                                                <input type="text" className="form-control" id="nameClient" value={this.state.newClient.address} aria-describedby="nameClient" placeholder="Enter an address"/>
                                            </div>
                                            
                                            
                                        </form>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                        <button onClick={this.handleResultClick} type="submit" className="btn btn-outline-success">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="alert alert-warning" role="alert">
                    Modify a client
                </div>
                <div className="alert alert-danger" role="alert">
                    Delete a client
                </div>
            </div>
        );
    }
}

export default Admin;