const plansModel = require('./plansModel');
const pricesModel = require('./pricesModel');

const getPlans = async () =>{
    const data = await plansModel.readFilePlans();
    return data;
}

const getPrices = async () =>{
    const data = await pricesModel.readFilePrices();
    return data;
}

module.exports = {
    getPlans,
    getPrices
}
