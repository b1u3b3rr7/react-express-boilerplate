const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const Account = new Schema({
    username: String,
    password: String,
    created: { type: Date, default: Date.now }
});

// generates hash
Account.methods.generateHash = function(password) {
    return bcrypt.hasnSync(password, 8);
};

Account.methods.validateHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('account', Account);