# **API**

Este é um script Node.js que utiliza a biblioteca Axios para fazer uma requisição à API do BlockScout Ethereum Explorer. Ele busca transações associadas a um endereço Ethereum específico nas últimas 24 horas, formata os dados relevantes e os salva em um arquivo JSON. Com isso, é possível monitorar as transações recentes associadas ao endereço Ethereum fornecido.

### **Pré-requisitos**

Antes de executar este script, certifique-se de ter o Node.js instalado em seu sistema. 

Além disso, é necessário instalar as dependências do projeto. No terminal, navegue até o diretório do projeto e execute o seguinte comando:

```
npm install axios
```

Como usar
Clone este repositório em seu sistema local:

```
git clone <URL_do_repositorio>
```

No arquivo script.js, substitua *'seu diretorio aqui'* pela localização onde você deseja salvar o arquivo JSON gerado.

No terminal, navegue até o diretório do projeto e execute o script usando o seguinte comando:

```
node script.js
```

O script realizará a requisição à API, filtrará as transações das últimas 24 horas e salvará os dados formatados no arquivo JSON especificado.

## **Personalização**

Se desejar monitorar um endereço Ethereum diferente, altere o URL da API na linha:

```
const response = await axios.get('https://eth.blockscout.com/api/v2/addresses 0x25D43E7c258bA2c971A146e0a753Cd5273df9559/transactions');
```

Substitua 0x25D43E7c258bA2c971A146e0a753Cd5273df9559 pelo endereço Ethereum desejado, esse enderço é apenas um endereço publico fornecido no site do blockscout.