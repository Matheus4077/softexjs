"use strict";
const appointments = require("../models/models");
function readAppointments() {
    console.log(`Appointments`);
    console.log(appointments);
}
;
module.exports = { readAppointments };
