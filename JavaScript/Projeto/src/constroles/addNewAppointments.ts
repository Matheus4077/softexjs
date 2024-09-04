const appointments = require("../models/models");

function addAppointments(idAppointments:number,patient:string,veterinarian:string,dateEmission:string){
    const newAppointment = {
        idAppointments,
        patient,
        veterinarian,
        dateEmission
    };
    appointments.push(newAppointment);
    return console.log(`Appointment for patient ${newAppointment.patient} on date ${newAppointment.dateEmission}.`);
};

module.exports = {addAppointments};