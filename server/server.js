const express = require('express')
const { cars } = require("../router/cars.routes");
const PORT = process.env.PORT || 3000;
const pg = require("pg");

const app = express();
app.use(bodyParser.json());
app.use(cars);

app.listen(PORT , console.log("is running " + PORT))