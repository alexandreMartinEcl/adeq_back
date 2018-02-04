/*
const User = require('../api/users/user.model');

User.find({})
    .exec((err, users) => {
        if (err) {
            return console.error(err);
        }
        if (users && users.length > 0) {
            return console.log('Already seeded');
        }
        const user = new User({
            firstName: 'Justin',
            lastName: 'Bieber',
            password: 'yoloswag123',
            email: 'maxence.lefebvre@soprasteria.com',
        });

        user.save((err, seeded) => {
            if (err) {
                return console.error(err);
            }
            return console.log('Seeded', seeded);
        });
    });
*/