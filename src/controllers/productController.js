//Dependencies
import superagent from 'superagent';


export default {

    postProduct: (url, body) => {
       return superagent
        .post(url)
        .set('Accept', 'application/json')
        .send(body)
        .then(res => {
            console.log('NewProduct', res.body);
        }).catch(err => console.log(err));
    },

    getAllProducts: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            console.log(res.body);
            cb(res);
        }).catch(err => console.log(err));
    },

    getProduct: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            console.log(res.body);
            cb(res);
        }).catch(err => console.log(err));
    },

    deleteProduct: (url) => {
        return superagent
        .delete(url)
        .then(res=> {
            console.log("Produc deleted");
        })
        .catch(err => console.log(err));
    }
};