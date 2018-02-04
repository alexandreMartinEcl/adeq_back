const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
    app.use(cors({'origin': 'http://localhost:8100', 'credentials': true}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use((req, res, next) => {
        console.log(new Date(), req.ip, req.method, req.url, req.query, req.body);
        next();
    });
};
