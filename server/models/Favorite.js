const { Schema } = mongoose.Schema;
const mongoose = require('mongoose');


const favoriteSchema = mongoose.Schema({
    useForm: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    movieId: {
        type: String
    },

    movieTitle: {
        type: String
    },

    moviePost: {
        type: String
    },

    movieRuntime: {
        type: String
    }
  
}, {timestamps: true})
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }