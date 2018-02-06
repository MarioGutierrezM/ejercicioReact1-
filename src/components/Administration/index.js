//Depndencies
import React, { Component } from "react";
//import superagent from 'superagent';
//import { Link } from "react-router-dom";
import ClientController from "../../controllers/clientController";


class Admin extends Component {

    constructor() {
        super();

        this.state = {
            newClient: {},
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false
        }

        //con bind se optiene todo el objeto this de la clase
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.postClient = this.postClient.bind(this);
        this.clearClient = this.clearClient.bind(this);
    }

    componentDidMount() {
        //   const urlProduct = 'http://localhost:3000/api/product/';
    }

    clearClient(e) {
        this.setState({
            newClient: {
                name: "",
                lastnamefa: "",
                lastnamemo: "",
                birthdate: "",
                address: ""
            },
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false
        });
    }

    postClient(e) {
        const urlClient = 'http://localhost:3000/api/client/';
        ClientController.postClient(urlClient, this.state.newClient);
    }

    handleInputChanged(e) {
        if (e.target.id === 'nameC') {
            this.setState({
                newClient: {
                    name: e.target.value
                },
                show1: true
            });
        }
        if (e.target.id === 'lastnameFC') {
            this.setState({
                newClient: {
                    name: this.state.newClient.name,
                    lastnamefa: e.target.value
                },
                show2: true
            });
        }
        if (e.target.id === 'lastnameMC') {
            this.setState({
                newClient: {
                    name: this.state.newClient.name,
                    lastnamefa: this.state.newClient.lastnamefa,
                    lastnamemo: e.target.value
                },
                show3: true
            });
        }
        if (e.target.id === 'birthdateC') {
            this.setState({
                newClient: {
                    name: this.state.newClient.name,
                    lastnamefa: this.state.newClient.lastnamefa,
                    lastnamemo: this.state.newClient.lastnamemo,
                    birthdate: e.target.value
                },
                show4: true
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
                },
                show5: true
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
                {/*  CREATE PRODUCT *********************************************************************************************************** */}
                <div className="alert alert-success" role="alert">
                    Create a product
                </div>
                {/*  MODIFY PRODUCT *********************************************************************************************************** */}
                <div className="alert alert-warning" role="alert">
                    Modify a product
                </div>
                {/*  DELETE PRODUCT *********************************************************************************************************** */}
                <div className="alert alert-danger" role="alert">
                    Delete a product
                </div>

                <br />
                <h3>Clients</h3>
                <hr />
                {/*  CREATE CLIENT *********************************************************************************************************** */}
                <div className="alert alert-success" role="alert">
                    <div>
                        {/*Button trigger modal */}
                        <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal">
                            Create a client
                        </button>

                        {/*Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                <label htmlFor="nameC">First Name</label>
                                                <input type="text" className="form-control input-green" id="nameC" value={this.state.newClient.name} onChange={this.handleInputChanged} placeholder="Enter first name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastnameFC">Father's Last Name </label>
                                                {
                                                    this.state.show1
                                                        ? <input type="text" className="form-control input-green" id="lastnameFC" value={this.state.newClient.lastnamefa} onChange={this.handleInputChanged} placeholder="Enter a father's lastname" />
                                                        : <input type="text" className="form-control input-green" id="lastnameFC" value={this.state.newClient.lastnamefa} onChange={this.handleInputChanged} placeholder="Enter a father's lastname" disabled />
                                                    //: <input type="text" className="form-control input-green" id="lastnameFC" value={this.state.newClient.lastnamefa} onChange={e => this.handleInputChanged(e)} placeholder="Enter a father's lastname" disabled/> another form
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastnameMC">Mother's Last Name</label>
                                                {
                                                    this.state.show2
                                                        ? <input type="text" className="form-control input-green" id="lastnameMC" value={this.state.newClient.lastnamemo} onChange={this.handleInputChanged} placeholder="Enter mother's last name" />
                                                        : <input type="text" className="form-control input-green" id="lastnameMC" value={this.state.newClient.lastnamemo} onChange={this.handleInputChanged} placeholder="Enter mother's last name" disabled />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="birthdateC">Birthdate</label>
                                                {
                                                    this.state.show3
                                                        ? <input type="Date" max="1999-12-31" className="form-control input-green" id="birthdateC" value={this.state.newClient.birthdate} onChange={this.handleInputChanged} placeholder="Enter  YYYY-MM-DD" />
                                                        : <input type="Date" max="1999-12-31" className="form-control input-green" id="birthdateC" value={this.state.newClient.birthdate} onChange={this.handleInputChanged} placeholder="Enter  YYYY-MM-DD" disabled />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="addressC">Address</label>
                                                {
                                                    this.state.show4
                                                        ? <input type="text" className="form-control input-green" id="addressC" value={this.state.newClient.address} onChange={this.handleInputChanged} placeholder="Enter an address" />
                                                        : <input type="text" className="form-control input-green" id="addressC" value={this.state.newClient.address} onChange={this.handleInputChanged} placeholder="Enter an address" disabled />
                                                }
                                            </div>
                                            * All fields are required
                                        </form>

                                    </div>
                                    <div className="modal-footer modal-color-success">
                                        <button type="button" onClick={this.clearClient} className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                        {
                                            this.state.show1 && this.state.show2 && this.state.show3 && this.state.show4 && this.state.show5 ?
                                                <button onClick={this.postClient} id="newClientMade" className="btn btn-outline-success" >Save</button>
                                                :
                                                <button onClick={this.postClient} id="newClientMade" className="btn btn-outline-success" disabled>Save</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  MODIFY CLIENT *********************************************************************************************************** */}
                <div className="alert alert-warning" role="alert">
                    Modify a client
                </div>
                {/*  DELETE CLIENT *********************************************************************************************************** */}
                <div className="alert alert-danger" role="alert">
                    Delete a client
                </div>
            </div>
        );
    }
}

export default Admin;