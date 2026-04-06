// This file creats and exports a custom EventsEmitter instance
const EventsEmitter = require("events");

// custom EventsEmitter
const bookingEmitter = new EventsEmitter();

module.exports = bookingEmitter;