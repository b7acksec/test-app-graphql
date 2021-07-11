"use strict";
exports.__esModule = true;
exports.userSchema = void 0;
var mongoose = require('mongoose');
exports.userSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    }
});
