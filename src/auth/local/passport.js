'use strict';

const passport = require('passport');

const socketServer = require('../../config/sockets');
const config = require('../../config');
const User   = require('../../api/users/user.model');

const {Strategy: LocalStrategy} = require('passport-local');

passport.use(
    new LocalStrategy({
            // in the request body
            usernameField: 'email',
            passwordField: 'password'
        },
        function (username, password, done) {
            User.findOne(
                {
                    email: username.trim().toLowerCase(),
                    active: true,
                },
                (err, user) => {
                    if (err) {
                        return done(err);
                    }

                    if (!user) {
                        return done(
                            {
                                status: 404,
                                code: 'UNKNOWN_USER',
                                message: 'Cet utilisateur n\'est pas enregistré.'
                            },
                            false
                        );
                    }

                    if (user.locked) {
                        return done(
                            {
                                status: 403,
                                code: 'LOCKED_USER',
                                message: 'Votre compte est verrouillé. Merci de vous rapprocher de votre administrateur',
                            },
                            false
                        );
                    }

                    if (!user.authenticate(password)) {
                        user.attempts++;

                        if (user.attempts >= config.MAX_LOGIN_ATTEMPTS) {
                            user.locked = true;
                        }

                        return user.save(
                            (err) => {
                                if (err) {
                                    return done(err);
                                }
                                done(
                                    {
                                        status: 400,
                                        code: 'INCORRECT_PASSWORD',
                                        message: 'Le mot de passe est incorrect.'
                                    },
                                    false
                                );
                            }
                        );
                    }

                    user.attempts = 0;
//                    socketServer.create_namespace(user.socket_name);

                    return user.save(
                        (err) => {
                            if (err) {
                                return done(err);
                            }
                            return done(null, user);
                        }
                    );
                }
            );
        }
    ));
