const { fetchID, fetchAll } = require("../database/pg");
const { SELECTID, SELECTALL, POST_DATA, UPDATE_DATA, DELET_DATA } = require("../models/cars.model");


const { Pool } = pg;
const pool = new Pool({
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    password: process.env.PG_PASSWORD,
});
module.exports = {
  GET: async (req, res) => {
    if (!isNaN(+req.params.id)) {
      res.send({
        data: await fetchID(SELECTID, req.params.id),
      });
    } else {
      res.send({
        data: await fetchAll(SELECTALL),
      });
    }
  },
  POST: async (req, res) => {
  const cleint = await pool.connect();
  const {
    car_model,
    car_year,
    color,
    price
  } = req.body;
  const result = await cleint.query(
   POST_DATA,
    [car_model, car_year, color, price]
  );
  res.json(result.rows[0]);
    },
  PUT: async (req, res) => {
  const cleint = await pool.connect();
  const {
      id
  } = req.params;
  const {
      car_model,
      car_year,
      color,
      price
  } = req.body;
  const result = await cleint.query(
      UPDATE_DATA,
      [car_model, car_year, color, price, id]
    );
    
  res.json(result.rows[0]);
    },
  DELETE: async (req, res) => {
  const cleint = await pool.connect();

  const {
      id
  } = req.params;
  await cleint.query(DELET_DATA, [id]);
  res.sendStatus(204);
  },
    
};
