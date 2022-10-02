const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 9002;

const db = require("./app/models");
const Role = db.role;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/api/auth/signup", db.getUsers);
app.get("/api/auth/signin", db.getUserById);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
