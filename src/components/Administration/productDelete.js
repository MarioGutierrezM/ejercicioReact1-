//Depndencies
import React, { Component } from "react";
import ProductController from "../../controllers/productController";

class ProductDelete extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
        //con bind se optiene todo el objeto this de la clase
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        const url = 'http://localhost:3000/api/product/';
        ProductController.getAllProducts(url, res => {
            this.setState({
                data: res.body
            })
        });
    }

    deleteProduct(e){
        let urlToDelete = `http://localhost:3000/api/product/${e.target.value}`;
        ProductController.deleteProduct(urlToDelete);
        let url = 'http://localhost:3000/api/product/';
        ProductController.getAllProducts(url, res => {
            this.setState({
                data: res.body
            })
        });
    }


    render() {
        return (
            <div>
                <div className="alert alert-danger" role="alert">
                    {/* <!-- Button trigger modal -->*/}
                    <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModalCenter">
                        Delete a Product
                    </button>

                    {/*<!-- Modal --> */}
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header modal-color-danger">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Delete a Product</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group">
                                    {
                                        this.state.data.map((product, key) => {
                                            return (
                                                <li className="list-group-item" key={key}>
                                                    <div className="row">
                                                        <div className="col-md-4 listSmall"> <img className="imgSmall" src={product.imageUrl} alt=""/> </div>
                                                        <div className="col-md-4 listSmall listCenter">
                                                            {product.name}
                                                        </div>
                                                        <div className="col-md-4 listSmall listCenter">
                                                            <button className="btn btn-outline-danger" value={product._id} onClick={this.deleteProduct}> Delete </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                                <div className="modal-footer modal-color-danger">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default ProductDelete;