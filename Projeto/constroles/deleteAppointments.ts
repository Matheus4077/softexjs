const appointments = require("../models/models");

function deleteAppointments(id:number){
    return appointments.splice(appointments.indexOf(appointments.find(appointment => appointment.idAppointments == id)));
};

module.exports = {deleteAppointments};