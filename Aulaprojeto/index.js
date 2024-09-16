import express  from "express";
const port = 3000;
const app = express();
import {users} from "./src/models/user.js";
import {router} from "./src/routers/user-routers.js"

// usado para garantir que os dados trafegados estao no formato json, sem isso as requesições podem vir erros
app.use(express.json());
app.use(router);

 
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});