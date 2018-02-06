//Dependencies
import superagent from 'superagent';


export default {

    getAllOrders: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            console.log(res.body);
            cb(res);
        }).catch(err => console.log(err));
    },

    getOrder: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            cb(res);
            console.log("Specific Order: ",res.body);
        }).catch(err => console.log(err));
    }
};