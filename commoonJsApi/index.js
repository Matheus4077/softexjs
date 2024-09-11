//inportando express
const express = require('express');

//iniciando o express
const app = express();
const {clients} = require('./models/clients');

app.get('/clients', (req,res) => {
    res.send(clients)
});

//utilizando o metodo json do express para fazer o parse do body da requisiçao 
app.use(express.json());

//rota raiz 
 app.get('/',(req,res)=> {
    res.send("hello word");
});

//renderizando um cliente especifico na rota /cliente/:id utilizado 
app.get('/clients/:id', (req, res) =>{
    const { id } = req.params;
    const client = clients.find((value) => value.id === Number (id));
    if(!client) return res.send('Client not found');
    res.send(client);
});

//criando um novo cliente na rota / cliente utilizando o metodo send e verbo HTTP POST 
app.post('/clients',(req, res) => {
    const {name} = req.body;
    const id = clients.length + 1;
    clients.push({id, name});
    res.send('Client added successfully');
});



//servidor rodando na porta 3000
app.listen(3000,() => {
    console.log('Server is running on port 3000');
});