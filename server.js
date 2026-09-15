const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Aplicaçao rodando em container docker!');
});

app.listen(PORT, () => {
    console.log('Aplicaçao rodando na porta ${PORT}');
});