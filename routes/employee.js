const express = require("express");
const { appendFile } = require("fs");
const path = require("path");
const router = express.Router();
const employee = require(path.join(__dirname,"..","controller","employee.js"));

router.get('/', employee.userForm);

router.post('/updated', employee.createData);

exports.employee = router;