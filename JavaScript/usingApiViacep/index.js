const express = require('express');
const axios = require('axios');
const {ceps} = require('./models/ceps');

const app = express();
const port = 3000;

async function fetchCepsData() {
    const promises = ceps.map(cep => 
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.data)
        .catch(() => null) // Retorna null em caso de erro
    );

    const results = await Promise.all(promises);
    return results.filter(data => data !== null); // Filtra resultados nulos 
}

app.get('/ceps', async (req, res) => {
    try {
        const data = await fetchCepsData();
        res.json(data); //Retorna os dados como JSON
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar os dados dos CEPS. '});
    }
});

app.listen(port,() => {
    console.log(`Sevidor rodando em http://localhost:${port}`);
});