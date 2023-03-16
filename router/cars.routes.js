const {
    Router
} = require("express");
const {
    GET
} = require("../controller/cars");
const {
    POST
} = require("../controller/cars");
const {
    PUT
} = require("../controller/cars");
const {
    DELETE
} = require("../controller/cars");



const cars = Router();

cars.get("/cars", GET);
cars.get("/cars/:id", GET);
cars.post("/cars", POST);

cars.put("/cars", PUT);
cars.delete("/cars", DELETE);
module.exports = {
    cars
};