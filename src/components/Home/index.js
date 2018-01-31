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
            <div className="Container">
                <h1>Home Page</h1>
                {
                    this.state.data.map(
                        (item, key) => <li key={key}> {item.name}</li>
                    )
                }
                <div className="">

                </div>
            </div>
        );
    }
}

export default Home;