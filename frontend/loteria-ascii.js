const figlet = require('figlet');

figlet('Loteria', (err, data) => {
    if (err) {
        console.error('Erro ao gerar ASCII:', err);
        return;
    }
    console.log(data);
});