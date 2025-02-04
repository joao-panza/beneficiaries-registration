const fs = require('fs').promises;

async function readFilePlans(){
    const plansFilePath = './src/data/plans.json';
    const data = await fs.readFile(plansFilePath, 'utf-8');
    return JSON.parse(data);
}

module.exports = {
    readFilePlans
}
