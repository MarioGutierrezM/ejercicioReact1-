//Depndencies
import React, { Component } from "react";
//import superagent from 'superagent';
//import { Link } from "react-router-dom";
import ClientController from "../../controllers/clientController";

class ProductUpdate extends Component {

    // constructor() {
    //     super();
    //     //con bind se optiene todo el objeto this de la clase
    // }

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

    

    render() {
        return (
            <div>
                <div className="alert alert-warning" role="alert">
                    Modify a product
                </div>

            </div>
        );
    }
}

export default ProductUpdate;