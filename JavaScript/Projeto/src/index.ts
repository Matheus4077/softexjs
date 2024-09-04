const appointments = require("./models/models");
const addAppointments = require("./constroles/addNewAppointments");
const deleteAppointments = require("./constroles/deleteAppointments");
const readAppointments = require("./constroles/readAppointments");
const updateAppointments = require("./constroles/updateAppointments");

readAppointments();
addAppointments(3,"Star","Dr.Jean","04/09/2024");
readAppointments();
updateAppointments(0,"dateEmisson","04/09/2024");
deleteAppointments(1);
readAppointments();