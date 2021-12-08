const express = require("express");
const path = require("path");
const router = express.Router();
var fetchController = require(path.join(__dirname, '..', 'controller', 'dashboard'));

const admin_dashboard = router.get('/dashboard',fetchController.fetchData);

exports.admin_dashboard = admin_dashboard;