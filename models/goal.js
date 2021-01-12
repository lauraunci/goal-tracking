const mongoose = require ('mongoose');

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Goal', goalSchema);