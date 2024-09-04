const appointments = require("../appointmentsmodels/models");
function readAppointments(){
    console.log(`Appointments`)
    console.log(appointments);
};

module.exports = {readAppointments}