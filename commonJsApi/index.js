// importando o express
const express = require('express');

//iniciaizando o express
const app = express();

//importando clients
const {clients} = require('./models/clients');


//utilizando o metodo json do express para fazer o parse do body da requisicao
app.use(express.json());

//rota raiz
app.get('/',(req,res) => {
    res.send("hello word");
});

//rota clients
app.get('/clients', (req,res) => {
    res.send(clients);
});

//rota id
app.get('/clients/:id', (req, res) => {
    const { id } = req.params; 
    const client = clients.find((value) => value.id === Number(id));
    if(!client) return res.send('Client not found');
    res.send(client);
});

//criando um novo cliente na rota /cliente utiizando o metodo send e verbo http post
app.post('/clients',(req, res) => {
    const {name} = req.body;
    const {age} = req.body;
    const id = clients.length + 1;
    clients.push({id,name,age});
    res.send('Client added')
});

// atualizando um cliente na rota /clients/:id utilizando o metodo send e verbo HTTP PUT
app.put('/clients/:id',(req, res) =>{
    const {id} = req.params;
    const {name} = req.body;
    const {age} = req.body;
    const client = clients.find((value) => value.id === Number(id));
    if(!client) return res.send('Client not found');
    client.name =  name;
    client.age = age;
    res.send('Client updated');
});

//deletando um cliente na rota /clients/:id utilizando o metodo send e verbo HTTP DELETE
app.delete('/clients/:id', (req, res) => {
    const {id} = req.params;
    const index = clients.findIndex((value) => value.id === Number(id));
    if(index === -1) return res.send('Client not foun');
    clients.splice(index, 1);
    res.send('Client deleted');
});

//servidor rodando na porta 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});