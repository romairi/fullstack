const envVar = process.env;

const config = {
    email: {
        service: "Gmail",
        addr: envVar.EMAIL,
        pass: envVar.EMAIL_PASS,
    }
};

module.exports = config;
