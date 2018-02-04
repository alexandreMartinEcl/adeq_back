const jwt = require('jsonwebtoken');

const config = require('../config');

function signToken(profile) {
    return jwt.sign(profile, config.jwt.secret, {expiresIn: config.jwt.expiresIn});
}

module.exports = {
    signToken,
};
