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
    adminEmail: process.env.ADMIN_EMAIL,
    adminPsswd: process.env.ADMIN_PSSWD,
    BASE_URL: process.env.BASE_URL,
    MAX_LOGIN_ATTEMPTS: 3,
    REQ_NB_QUESTIONS: 10,
    NB_QUESTIONS: 723,
    ADMIN_ACCESS_TOKEN: process.env.ADMIN_ACCESS_TOKEN,
};
