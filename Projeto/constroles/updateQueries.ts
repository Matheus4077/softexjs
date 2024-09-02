const queries = require("../models/models");

function updateQuerie (id:number,value:string,newValue:string){
    switch(value){
        case "patient":
            return queries[id]
    }
};