const queries = require('../models/models');

function deleteQuerie(idExames:number){
    return queries.splice(queries.indexOf(queries.find(querie => querie.idQueries == idExames)));
};

module.exports = {deleteQuerie};