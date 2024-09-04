"use strict";
const appointments = require("../models/models");
function addAppointments(idAppointments, patient, veterinarian, dateEmission) {
    const newAppointment = {
        idAppointments,
        patient,
        veterinarian,
        dateEmission
    };
    appointments.push(newAppointment);
    return console.log(`Appointment for patient ${newAppointment.patient} on date ${newAppointment.dateEmission}.`);
}
;
module.exports = { addAppointments };
