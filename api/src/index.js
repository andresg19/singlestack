const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

<<<<<<< HEAD
//routes(
app.use(require("./routes/index"));

app.listen(3001);
console.log("Server on port 3001!");
=======
//routes
app.use(require("./routes/index"));

modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Users, Posts } = sequelize.models;

Users.belongsToMany(Posts, { through: "Users_Posts" });
Posts.belongsToMany(Users, { through: "Users_Posts" });

app.listen(3001);
console.log("Server on port 3001.");
>>>>>>> 82cf6ef5fcce8bd85a648143c1f918696fadaf44
