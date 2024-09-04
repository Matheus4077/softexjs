const appointments = require("../models/models");

function updateAppointments(id:number,value:string,newValue:string){
    switch(value){
        case "patient":
            return appointments[appointments.indexOf(appointments.find(appointments => appointments.idAppointments == id))].patient = newValue;
        case"veterinarian":
            return appointments[appointments.indexOf(appointments.find(appointments => appointments.idAppointments == id))].veterinarian = newValue;
        case"dateEmission":
            return appointments[appointments.indexOf(appointments.find(appointments => appointments.idAppointments == id))].dateEmission = newValue;
        default:
            return console.log("enter a valid value!")
    }
};

module.exports = {updateAppointments};