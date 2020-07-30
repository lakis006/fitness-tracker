const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
    day: {type: Date, default: Date.now},
    exercises: [{
        type:  {
            type: String,
            trim: true,
            required: "You need to select a type!"
        },
    }]
})