const mongoose = require('mongoose'); 

const polishSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        require: true,
        default: Date.now
    },
});

module.exports = mongoose.model('Polish', polishSchema);