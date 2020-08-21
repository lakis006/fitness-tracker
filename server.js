// Requires key npm packages
const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8080;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.json());

app.use(express.static("public"));

//This is where we set up the database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI);

app.use(require("./routes/workout_route"));
require("./routes/html_routes.js")(app);

app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});

