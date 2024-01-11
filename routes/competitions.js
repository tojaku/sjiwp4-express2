const express = require("express");
const router = express.Router();
const { checkAuthCookie } = require("../services/auth.js");

router.get("/", checkAuthCookie, function (req, res, next) {
    if (req.user) {
        console.log("Slobodan ulaz");
    } else {
        console.log("Zabranje ulaz");
    }

    res.render("competitions/index");
});

module.exports = router;