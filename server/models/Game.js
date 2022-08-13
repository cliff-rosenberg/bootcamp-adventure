const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    mapLocation: {
        type: Number,
        required: true
    },
    paragraph: {
        type: String,
        required: true
    },
    choices: [
        {
        text: String,
        location: Number
        }
    ]

});

const Game = model('Game', gameSchema);

module.exports = Game;