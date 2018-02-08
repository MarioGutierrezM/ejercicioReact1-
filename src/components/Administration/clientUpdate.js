//Depndencies
import React, { Component } from "react";
//import superagent from 'superagent';
//import { Link } from "react-router-dom";
//import ClientController from "../../controllers/clientController";


class ClientUpdate extends Component {

    //constructor() {
        //super();

        //con bind se optiene todo el objeto this de la clase
    //}

    componentDidMount() {
        //   const urlProduct = 'http://localhost:3000/api/product/';
    }

    render() {
        return (
            <div>
                <div className="alert alert-warning" role="alert">
                    <button className="btn btn-outline-warning darkYellow" type="button" data-toggle="collapse" data-target="#clientUpd" aria-expanded="false" aria-controls="clientUpd">
                        Update a Client
                    </button>
                    <div className="collapse" id="clientUpd">
                        <div className="card card-body">
                            clinetssss
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ClientUpdate;