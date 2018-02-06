//Depndencies
import React, { Component } from "react";
import superagent from 'superagent';
//import { Link } from "react-router-dom";


class Admin extends Component {

    constructor() {
        super();

        this.state = {
            newClient: {
                
            }
        }

        //con bind se optiene todo el objeto this de la clase
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.postClient = this.postClient.bind(this);
    }

    componentDidMount() {
        //   const urlProduct = 'http://localhost:3000/api/product/';
    }

    postClient(e) {
        const urlClient = 'http://localhost:3000/api/client/';
        superagent
            .post(urlClient)
            .set('Accept', 'application/json')
            .send(this.state.newClient)
            .then(res => {
                console.log('NewClient', res.body);
            }).catch(err => console.log(err));
    }

    handleInputChanged(e) {
        if (e.target.id === 'nameC') {
            this.setState({
                newClient: {
                    name: e.target.value
                }
            });
        }
        if (e.target.id === 'lastnameFC') {
            this.setState({
                newClient: {
                    name: this.state.newClient.name,
                    lastnamefa: e.target.value
                }
            });
        }
        if (e.target.id === 'lastnameMC') {
            this.setState({
                newClient: {
                    name: this.state.newClient.name,
                    lastnamefa: this.state.newClient.lastnamefa,
                    lastnamemo: e.target.value
                }
            });
        }
        if (e.target.id === 'birthdateC') {
            this.setState({
                newClient: {
                    name: this.state.newClient.name,
                    lastnamefa: this.state.newClient.lastnamefa,
                    lastnamemo: this.state.newClient.lastnamemo,
                    birthdate: e.target.value
                }
            });
        }
        if (e.target.id === 'addressC') {
            this.setState({
                newClient: {
                    name: this.state.newClient.name,
                    lastnamefa: this.state.newClient.lastnamefa,
                    lastnamemo: this.state.newClient.lastnamemo,
                    birthdate: this.state.newClient.birthdate,
                    address: e.target.value
                }
            });
        }
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
                                    <div className="modal-header modal-color-success">
                                        <h5 className="modal-title" id="exampleModalLabel">Create a client</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <form>
                                            <div className="form-group">
                                                <label for="nameC">First Name</label>
                                                <input type="text" className="form-control input-green" id="nameC" value={this.state.newClient.name} onChange={this.handleInputChanged} placeholder="Enter first name" />
                                            </div>
                                            <div className="form-group">
                                                <label for="lastnameFC">Father's Last Name </label>
                                                <input type="text" className="form-control input-green" id="lastnameFC" value={this.state.newClient.lastnamefa} onChange={this.handleInputChanged} placeholder="Enter a father's lastname" />
                                            </div>
                                            <div className="form-group">
                                                <label for="lastnameMC">Mother's Last Name</label>
                                                <input type="text" className="form-control input-green" id="lastnameMC" value={this.state.newClient.lastnamemo} onChange={this.handleInputChanged} placeholder="Enter mother's last name" />
                                            </div>
                                            <div className="form-group">
                                                <label for="birthdateC">Birthdate</label>
                                                <input type="text" className="form-control input-green" id="birthdateC" value={this.state.newClient.birthdate} onChange={this.handleInputChanged} placeholder="Enter  YYYY-MM-DD" />
                                            </div>
                                            <div className="form-group">
                                                <label for="addressC">Address</label>
                                                <input type="text" className="form-control input-green" id="addressC" value={this.state.newClient.address} onChange={this.handleInputChanged} placeholder="Enter an address" />
                                            </div>
                                        </form>

                                    </div>
                                    <div className="modal-footer modal-color-success">
                                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                        <button onClick={this.postClient} id="newClientMade" className="btn btn-outline-success">Save</button>
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