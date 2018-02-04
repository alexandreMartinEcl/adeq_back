const path = require('path');

const { isAuthenticated, is_admin_authenticated } = require('./../auth/auth.middleware');

module.exports = (app) => {
    app.use("/questions", isAuthenticated(), require("../api/questions"));
    app.use("/discussions", isAuthenticated(), require("../api/discussions"));
    app.use("/answers", isAuthenticated(), require("../api/answers"));
    app.use('/users', isAuthenticated(), require('../api/users'));
    app.use('/evals', isAuthenticated(), require('../api/evals'));
    
    app.use('/auth', require('../auth'));

    app.use('/admin', is_admin_authenticated(), require('../api/admin'));

    app.get('/*', (req, res) => {
       res.sendFile(path.join(__dirname, '..', 'views', '404.html'));
    });
};
