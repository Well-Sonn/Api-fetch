const axios = require('axios');
const fs = require('fs');

async function fetchAndSaveData() {
    const agora = new Date();
    agora.setDate(agora.getDate() - 1);
    console.log(agora);

    try {
        const response = await axios.get('https://eth.blockscout.com/api/v2/addresses/0x25D43E7c258bA2c971A146e0a753Cd5273df9559/transactions');
        const transactions = response.data.items;

        const transacoesUltimas24h = transactions.filter(transaction => {
            const timestamp = new Date(transaction.timestamp);
            return timestamp > agora;
        });

        const transacoesFormatadas = transacoesUltimas24h.map(transaction => {
            return {
                hash: transaction.hash,
                from: transaction.from.hash,
                to: transaction.to.hash,
                valor: transaction.value,
                data: new Date(transaction.timestamp).toLocaleDateString(),
                hora: new Date(transaction.timestamp).toLocaleTimeString(),
                descricao: transaction.tx_types.join(', ')
            };
        });

        const jsonData = JSON.stringify(transacoesFormatadas, null, 2);
        const outputFilePath = 'seu diretorio aqui';

        fs.writeFileSync(outputFilePath, jsonData, (err) => {
            if (err) {
                console.error('Erro ao salvar o arquivo:', err);
            } else {
                console.log('Dados salvos com sucesso em:', outputFilePath);
            }
        });
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

// Chama a função para coletar e salvar os dados
fetchAndSaveData();
