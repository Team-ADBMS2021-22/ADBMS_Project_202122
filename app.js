const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require(path.join(__dirname,'database','database.js'));
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

const app = express();

// dotenv.config();

// mongoose.connect(process.env.MONGO_URL, () => {
//     console.log("Database is connected");
// });

const port = process.env.PORT || "3000";

const employee = require(path.join(__dirname,"routes","employee.js"));
const admin = require(path.join(__dirname,"routes","admin_dashboard.js"));
const create_acc = require(path.join(__dirname,"routes","create_account.js"));
const login = require(path.join(__dirname, "routes", "login.js"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine','ejs');
app.set('views', 'views');


app.use(employee.employee);
app.use(admin.admin_dashboard);
app.use(create_acc.create_account);
app.use(login.login);
// app.use(employee.employee_task);

// app.use(bodyParser.json());


// app.use((req, res, next) => {
//     res.send("<h1>Hello, this is node.js .</h1>");
// });

app.use((req,res,next) => {
    res.status(404).render(path.join(__dirname,"views","error.ejs"))
});

app.listen(port, () => {
    console.log("Listening to port 3000");
});