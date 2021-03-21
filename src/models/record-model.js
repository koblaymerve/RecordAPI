const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    key: {
        type: String
    },
    value: {
        type: String
    },
    createdAt: {
        type: Date
    },
    counts: [
        {
            type: Number
        }
    ]
})

module.exports = mongoose.model("records", recordSchema);