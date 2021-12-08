const express = require("express");
const path = require("path");

const routes = express.Router();

const create_account = routes.get('/createAccount', (req, res, next) => {
    res.render(path.join(__dirname, "..", "views", "createAccount.ejs"));  
});

exports.create_account = create_account;