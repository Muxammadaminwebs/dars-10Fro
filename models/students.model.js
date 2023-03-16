module.exports = {
    SELECTID: "SELECT * FROM cars where id = $1",
    SELECTALL: "SELECT * FROM cars",
    POST_DATA: "INSERT INTO cars(car_model, car_year, color, price) VALUES($1, $2, $3, $4) RETURNING *",
    UPDATE_DATA: "UPDATE cars SET car_model=$1, car_year=$2 color=$3 price=$4 WHERE id=$5",
    DELET_DATA: "DELETE FROM cars where id = $1",
};
