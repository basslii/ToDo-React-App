// import express, { json, urlencoded } from 'express';
import express from 'express';
import cors from "cors";

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));s

//parse requests of content-type - application/json
app.use(express(json));

//parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true}));

import { sequelize } from "./app/models";
sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .cactch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

//simple route
app.get("/", (req,res) => {
    res.json({ message: "Welcome to My Application"});
});

//set port, listen for requests
const PORT = process.env.PORT || 4250;
app.listen(PORT, () => {
    console.log(`your server is connected on ${PORT}`)

});