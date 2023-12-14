const JWT_SECRET_KEY = "TDt41WTqODtLCCHDUStkAxRKd9QrDmPTrUozvezv969ZZW3EBwQYL0PITDtVSzFvTCgd9PqJDv6Gw6hqDVXIYmYP6O6sypYqjXm94hLG2iRTLVVvfAJyztkXd8kp3eJW";

const jwt = require("jsonwebtoken");

function getUserJwt(id, email, name, role, expDays = 7) {
    const tokenData = {
        uid: id,
        email: email,
        name: name,
        role: role,
        time: Date.now()
    };

    const tokenOptions = {
        expiresIn: expDays * 24 * 60 * 60
    };

    const token = jwt.sign(tokenData, JWT_SECRET_KEY, tokenOptions);

    return token;
}

// MIDDLEWARE FOR AUTH COOKIE CHECK
function checkAuthCookie(req, res, nex) {
    const token = req.cookies["auth"];
    console.log("COOKIE CHECK", token);

    // TODO if token null error

    const result = jwt.verify(token, JWT_SECRET_KEY);
    console.log("TOKEN CHECK", result);

    // TODO if token verified ok, else eror
}

module.exports = {
    getUserJwt,
    checkAuthCookie
};