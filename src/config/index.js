module.exports = {
    app: {
        port: process.env.APP_PORT || 8080
    },
    mongodb: {
        uri: process.env.MONGODB_URI,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
    MAX_LOGIN_ATTEMPTS: 3,
    REQ_NB_QUESTIONS: 10,
    NB_QUESTIONS: 50,
};
