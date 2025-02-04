const fs = require('fs').promises;

async function readFilePrices(){
    const pricesFilePath = './src/data/prices.json';
    const data = await fs.readFile(pricesFilePath, 'utf-8');
    return JSON.parse(data);
}

module.exports = {
    readFilePrices
}