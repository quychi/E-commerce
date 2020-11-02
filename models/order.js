var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var orderSchema = new Schema({
    order: { type: String },
    total: { type: String }
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;