const expressJwt = require('express-jwt');
const compose    = require('composable-middleware');

const config = require("../config");
const User   = require('../api/users/user.model');

const validateJwt = expressJwt({secret: config.jwt.secret});

const isAuthenticated = () => compose()
    .use(
        (req, res, next) => {
            if (req.query && req.query.access_token) {
                req.headers.authorization = `Bearer ${req.query.access_token}`;
            }
            validateJwt(
                req, res, err => {
                    if (err) {
                        console.error(err);
                        return res.status(401).json({code: 'NOT_CONNECTED', message: 'Veuillez vous reconnecter'});
                    }
                    next();
                }
            )
        }
    )
    .use(
        (req, res, next) => {
            User.findOne(
                {email: req.user.email, active: true},
                {   _id: true, firstName: true, lastName: true, email: true,
                    curr_discussion_id: true, room_name: true,
                    curr_discussion_role: true},
                (err, user) => {
                    if (err) {
                        return next(err);
                    }
                    if (!user) {
                        return res.status(404).json({code: 'NOT_CONNECTED', message: 'Utilisateur introuvable'});
                    }

                    console.log("User found with token: ");
                    console.log(user);
                    req.user = user;
                    next();
                }
            )
        }
    );

const is_admin_authenticated = () => compose()
    .use(
        (req, res, next) => {
            if ( req.headers.admin_token === config.ADMIN_ACCESS_TOKEN ){
                next();
            } else {
                res.status(201).json({ error: "Acess denied" });
            }
        });
/*
            if (req.query && req.query.access_token) {
                req.headers.authorization = `Bearer ${req.query.access_token}`;
            }
            validateJwt(
                req, res, err => {
                    if (err) {
                        console.error(err);
                        return res.status(401).json({code: 'NOT_CONNECTED', message: 'Veuillez vous reconnecter'});
                    }
                    next();
                }
            )
        }
    )
    .use(
        (req, res, next) => {
            User.findOne(
                {email: req.user.email, active: true},
                {   _id: true, firstName: true, lastName: true, email: true,
                    curr_discussion_id: true, room_name: true},
                (err, user) => {
                    if (err) {
                        return next(err);
                    }
                    if (!user) {
                        return res.status(404).json({code: 'NOT_CONNECTED', message: 'Utilisateur introuvable'});
                    }

                    console.log("User found with token: ");
                    console.log(user);
                    req.user = user;
                    next();
                }
            )
        }
    );
*/

module.exports = {
    isAuthenticated,
    is_admin_authenticated
};
