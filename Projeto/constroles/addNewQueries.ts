const {} = require("../models/models");

function addQuerie(idQueries:number,patient:string,veterinarian:string,dateEmission:string){
    const querie = {
        idQueries,
        patient,
        veterinarian,
        dateEmission
    }
    queries.push(querie)
};