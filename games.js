const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    user_id: {type: String,},
    game_date: {type: Date},
    game_level: {type: Number},
    rounds:[{
        user_guess:{type: Number},
        correct_locations_count:{type: Number},
        correct_numbers_count:{type: Number},
        total_points:{type: Number},
    }],
    rounds_played: {type: Number},
    game_outcome: {type: Boolean},
})

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;