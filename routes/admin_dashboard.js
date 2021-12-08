const express = require("express");
const path = require("path");
const router = express.Router();

const admin_dashboard = router.get('/dashboard', (req, res, next) => {
    res.render(path.join(__dirname,"..","views","dashboard.ejs"));
});

exports.admin_dashboard = admin_dashboard;