const passport = require('passport');

const {signToken} = require('../auth.service');

require('./passport');

module.exports = (req, res, next) => passport.authenticate('local', (error, user) => {
    if (error) {
        return res.status(error.status || 500).json({code: error.code, message: error.message});
    }
    return res.status(200).json({
        token: signToken(user.profile),
        room_name: user.room_name,
        role: user.curr_discussion_role,
        firstName: user.firstName,
        lastName: user.lastName,
        currentMatch: user.current_match,
        email: user.email
    });
})(req, res, next);
