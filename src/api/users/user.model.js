const mongoose = require('mongoose');

const {makeSalt, encryptPassword} = require('./password.utils');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
        // validate: [validator.isEmail, 'Le format de l\'adresse email est incorrect']
    },
    firstName: {
        type: String,
        lowercase: true,
        trim: true,
        required: 'Le prénom est obligatoire',
    },
    lastName: {
        type: String,
        lowercase: true,
        trim: true,
        required: 'Le nom est obligatoire',
    },
    pseudo: {
        type: String,
        default: ""
    },
    //weekly
    current_match: String,
    curr_discussion_id: String,
    room_name: String,
    curr_discussion_role: String,
    // utils
//    provider: {type: String, default: 'local', enum: [ 'local' ]},
    active: {type: Boolean, default: true},
    // security
    hashedPassword: {type: String, required: true},
    salt: {type: String, required: true},
    attempts: {type: Number, default: 0},
    locked: {type: Boolean, default: false},
    validated: {type: Boolean, default: false}
});

UserSchema.pre('save', function(next){
    this.pseudo = this.firstName;
    next();
});

// Virtuals
UserSchema.virtual('password')
    .set(function (password) {
        this._password      = password;
        this.salt           = makeSalt();
        this.hashedPassword = encryptPassword(password, this.salt);
    })
    .get(function () {
        return this._password;
    });

// used for jwt generation
UserSchema.virtual('profile')
    .get(function () {
        const {email, firstName, lastName} = this;
        return {email, firstName, lastName};
    });


UserSchema.methods = {
    authenticate: function (password) {
        return this.hashedPassword === encryptPassword(password, this.salt);
    }
};

module.exports = mongoose.model('User', UserSchema);
