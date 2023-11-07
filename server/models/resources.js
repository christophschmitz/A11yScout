// models/resource.js
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }]
});


const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
