const express = require('express');
const app = express();
const {conection} = require('./database/conection');
const {router} = require('./src/routers/clientRouters');

app.user(express.json());
app.use(router);

app.listem(3000, () => {
    conection.connect((err) =>{
        if (err){
            console.error('error connecting to database:', err.stack);
            return;
        }
        console.log('connected to database with ID', conection.threadId);
    });

    console.log('server running on port 3000');
});