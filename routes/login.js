const express = require('express');
const path = require('path');

const routes = express.Router();

const login = routes.get('/login', (req, res, next) => {
    res.render(path.join(__dirname, "..", "views", "login.ejs"));
});

exports.login = login;