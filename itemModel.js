const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {type: String, required: true},
    description: {type: String, default: ''},
    locationFound: {type: String, required: true},
    claimed: {type: Boolean, default: false},
    dateFound: { type: Date, default: Date.now }
})

const Item = new mongoose.model('Item', itemSchema);
module.exports = Item;