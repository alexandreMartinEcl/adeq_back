const crypto = require('crypto');

function makeSalt() {
    return crypto.randomBytes(16).toString('base64');
}

function encryptPassword(password, salt) {
    if (!password || !salt) {
        return '';
    }
    const saltBuffer = new Buffer(salt, 'base64');

    return crypto.pbkdf2Sync(password, saltBuffer, 10848, 64, 'sha512').toString('base64');
}

module.exports = {
    makeSalt,
    encryptPassword,
};
