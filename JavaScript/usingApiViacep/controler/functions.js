/* async function fetchCepsData() {
    const promises = ceps.map(cep => 
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.data)
        .catch(() => null) // Retorna null em caso de erro
    );

    const results = await Promise.all(promises);
    return results.filter(data => !== null); // Filtra resultados nulos 
}

module.exports = {
    fetchCepsData
} */