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
        name:  {
            type: String,
            trim: true,
            required: "You need to select a Workout!"
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        }, 
        reps: {
            type: Number
        }
    }]
});
const Fitness = mongoose.model("fitness", FitnessSchema)

module.exports = Fitness;