//Dependencies
import superagent from 'superagent';


export default {

    postClient: (url, body) => {
       return superagent
        .post(url)
        .set('Accept', 'application/json')
        .send(body)
        .then(res => {
            console.log('NewClient', res.body);
        }).catch(err => console.log(err));
    }
};