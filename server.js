const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const express = require("express");

let Fitness = require("./fitness.js"); 


const PORT = process.env.PORT || 9000;

const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_ATLAS_URI || "mongodb://localhost/fitness", {useNewUrlParser: true });

app.get("/api/workouts", (req, res) =>{
    Fitness.find({}).then((fitnessDB)=>{
        res.json(fitnessDB);
    })
});

app.put("/api/workouts/:id", (req, res) =>{
    Fitness.update({"_id": req.params.id},{
        $push:{exercises: req.body}
    })
    .then((fitnessDB) =>{
        res.json(fitnessDB)
    });
});

app.post("/api/workouts/", (req, res) =>{
    Fitness.create(req)
    .then((fitnessDB) =>{
        res.json(fitnessDB)
    });
});

app.get("/api/workouts/range", (req, res) =>{
    Fitness.find({})
    .then((fitnessDB)=>{
        res.json(fitnessDB)
    });
});

app.get("/stats", (req,res) =>{
    res.sendFile(path.join(__dirname + 'public/stats.html'));
});

app.get("/exercise", (req, res) =>{
    res.sendFile(path.join(__dirname + 'public/exercise.html'));
});

app.listen(PORT, ()=>{
    console.log(`App running on ${PORT}: `)
})