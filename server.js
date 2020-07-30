const mongoose = require("mongoose");
const path = require("path");
const logger = require("logger");
const express = require("express");

let fitness = require("../fitness.js"); 


const PORT = process.env.PORT || 3005;

const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_ATLAS_URI || "mongodb://localhost/fitness", {useNewUrlParser: true });