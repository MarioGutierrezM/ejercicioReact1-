//Depndencies
import React, { Component } from "react";

//assets
//import './css/Content.css';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 imgBan" src={"http://blog.cpdfootball.de/wp-content/uploads/2016/07/manchester-united-adias-home-jersey-2017.jpg"} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>We have the best brands of the market.</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 imgBan" src={"https://s2-ssl.dmcdn.net/mD-Zd.jpg"} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>We have the best brands of the market.</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 imgBan" src={"https://global.rakuten.com/corp/fcbarcelona/assets/img/keyvisual/main_sp.jpg"} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>We have the best brands of the market.</h1>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <br />
                <div className="container">
                    <div class="card-group">
                        <div class="card">
                            <img class="card-img-top" src={"https://pbs.twimg.com/profile_images/951796620085157888/P5KMCsC2_400x400.jpg"} alt="Card img cap" />
                            <div class="card-body">
                                <h5 class="card-title">Adidas</h5>
                                <p class="card-text">We have the best brands of the market. You can find a lot of diferent sport products, as Sneakers, Jerseys, Soccers boots, balls, and others kinds of products.</p>
                                <p class="card-text"><small class="text-muted">The Best Products</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={"http://fullhdwall.com/wp-content/uploads/2017/07/Super-Nike-Photo.jpg"} alt="Card img cap" />
                            <div class="card-body">
                                <h5 class="card-title">Nike</h5>
                                <p class="card-text">We have the best brands of the market. You can find a lot of diferent sport products, as Sneakers, Jerseys, Soccers boots, balls, and others kinds of products.</p>
                                <p class="card-text"><small class="text-muted">The Best Prices</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={"https://i.pinimg.com/736x/5b/08/8c/5b088c292d43398073c3fd6bfc9c01a5--asafa-powell-logo-design.jpg"} alt="Card imag cap" />
                            <div class="card-body">
                                <h5 class="card-title">Puma</h5>
                                <p class="card-text">We have the best brands of the market. You can find a lot of diferent sport products, as Sneakers, Jerseys, Soccers boots, balls, and others kinds of products.</p>
                                <p class="card-text"><small class="text-muted">The Best Brands</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;