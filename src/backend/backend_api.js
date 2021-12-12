const express = require("express");
const app = express();

const PORT = 3001;

const database = require("./database.js");

const cors = require("cors");
app.use(cors());

database.connectToMongoDb();

app.get("/getJobs", (request, response) => {
  console.log("Inside get method");

  database
    .fetchJobs()
    .then((data) => {
      console.log(data);
      response.json(data);
    })
    .catch(() => {
      console.log("Error occured in get request!");
    });
  //response.send(data);
});

app.listen(PORT, () => {
  console.log("Successfully started server at: " + PORT);
});
