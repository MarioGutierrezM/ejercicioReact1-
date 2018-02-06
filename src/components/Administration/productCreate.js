//Depndencies
import React, { Component } from "react";
//import superagent from 'superagent';
//import { Link } from "react-router-dom";
import ProductController from "../../controllers/productController";

class ProductCreate extends Component {

    constructor() {
        super();

        this.state = {
            newProduct: {},
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false
        }

        //con bind se optiene todo el objeto this de la clase
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.postProduct = this.postProduct.bind(this);
        this.clearProduct = this.clearProduct.bind(this);
    }

    componentDidMount() {
    }

    clearProduct(e) {
        this.setState({
            newProduct: {
                name: "",
                description: "",
                category: "",
                stock: "",
                price: "",
                imageUrl: ""
            },
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false
        });
    }

    postProduct(e) {
        const url = 'http://localhost:3000/api/product/';
        ProductController.postProduct(url, this.state.newProduct);
    }

    handleInputChanged(e) {
        if (e.target.id === 'name') {
            this.setState({
                newProduct: {
                    name: e.target.value
                },
                show1: true
            });
        }
        if (e.target.id === 'description') {
            this.setState({
                newProduct: {
                    name: this.state.newProduct.name,
                    description: e.target.value
                },
                show2: true
            });
        }
        if (e.target.id === 'category') {
            this.setState({
                newProduct: {
                    name: this.state.newProduct.name,
                    description: this.state.newProduct.description,
                    category: e.target.value
                },
                show3: true
            });
        }
        if (e.target.id === 'stock') {
            this.setState({
                newProduct: {
                    name: this.state.newProduct.name,
                    description: this.state.newProduct.description,
                    category: this.state.newProduct.category,
                    stock: Number(e.target.value)
                },
                show4: true
            });
        }
        if (e.target.id === 'price') {
            this.setState({
                newProduct: {
                    name: this.state.newProduct.name,
                    description: this.state.newProduct.description,
                    category: this.state.newProduct.category,
                    stock: this.state.newProduct.stock,
                    price: Number(e.target.value)
                },
                show5: true
            });
        }
        if (e.target.id === 'urlImage') {
            this.setState({
                newProduct: {
                    name: this.state.newProduct.name,
                    description: this.state.newProduct.description,
                    category: this.state.newProduct.category,
                    stock: this.state.newProduct.stock,
                    price: this.state.newProduct.price,
                    imageUrl: e.target.value
                },
                show6: true
            });
        }
    }

    render() {
        return (
            <div>
                <div className="alert alert-success" role="alert">
                    <div>
                        {/*Button trigger modal */}
                        <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal">
                            Create a Product
                        </button>

                        {/*Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header modal-color-success">
                                        <h5 className="modal-title" id="exampleModalLabel">Create a Product</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="name">Product Name</label>
                                                <input type="text" className="form-control input-green" id="name" value={this.state.newProduct.name} onChange={this.handleInputChanged} placeholder="Enter a name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Product Description </label>
                                                {
                                                    this.state.show1
                                                        ? <textarea type="text" className="form-control input-green" id="description" value={this.state.newProduct.description} onChange={this.handleInputChanged} placeholder="Enter a description" />
                                                        : <textarea type="text" className="form-control input-green" id="description" value={this.state.newProduct.description} onChange={this.handleInputChanged} placeholder="Enter a description" disabled />
                                                        //: <input type="text" className="form-control input-green" id="lastnameFC" value={this.state.newProduct.lastnamefa} onChange={e => this.handleInputChanged(e)} placeholder="Enter a father's lastname" disabled/> another form
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="category">Product Category</label>
                                                {
                                                    this.state.show2
                                                        ? <input type="text" className="form-control input-green" id="category" value={this.state.newProduct.category} onChange={this.handleInputChanged} placeholder="Enter a category" />
                                                        : <input type="text" className="form-control input-green" id="category" value={this.state.newProduct.category} onChange={this.handleInputChanged} placeholder="Enter a category" disabled />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="stock">Product Stock</label>
                                                {
                                                    this.state.show3
                                                        ? <input type="number" className="form-control input-green" id="stock" value={this.state.newProduct.stock} onChange={this.handleInputChanged} placeholder="Enter the stock" />
                                                        : <input type="number" className="form-control input-green" id="stock" value={this.state.newProduct.stock} onChange={this.handleInputChanged} placeholder="Enter the stock" disabled />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="price">Product Price</label>
                                                {
                                                    this.state.show4
                                                        ? <input type="number"  className="form-control input-green" id="price" value={this.state.newProduct.price} onChange={this.handleInputChanged} placeholder="Enter a price" />
                                                        : <input type="number"  className="form-control input-green" id="price" value={this.state.newProduct.price} onChange={this.handleInputChanged} placeholder="Enter a price" disabled />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="urlImage">Product Image</label>
                                                {
                                                    this.state.show5
                                                        ? <input type="text" className="form-control input-green" id="urlImage" value={this.state.newProduct.imageUrl} onChange={this.handleInputChanged} placeholder="Enter a url" />
                                                        : <input type="text" className="form-control input-green" id="urlImage" value={this.state.newProduct.imageUrl} onChange={this.handleInputChanged} placeholder="Enter a url" disabled />
                                                }
                                            </div>
                                            * All fields are required
                                        </form>

                                    </div>
                                    <div className="modal-footer modal-color-success">
                                        <button type="button" onClick={this.clearProduct} className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                        {
                                            this.state.show1 && this.state.show2 && this.state.show3 && this.state.show4 && this.state.show5 && this.state.show6 
                                                ? <button onClick={this.postProduct} id="newProductMade" className="btn btn-outline-success" >Save</button>
                                                : <button onClick={this.postProduct} id="newproductMade" className="btn btn-outline-success" disabled>Save</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCreate;