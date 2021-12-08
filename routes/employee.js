const express = require("express");
const path = require("path");
const router = express.Router();

const response = router.get('/', (req, res, next) => {
    res.render(path.join(__dirname,"..","views","employee.ejs"));
});

exports.employee = response;