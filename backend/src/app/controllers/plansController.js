const proposalModel = require('../models/proposalModel');

const getPlans = async (_req, res) =>{
    const plansList = await proposalModel.getPlans();
    return res.status(200).json(plansList);
}

module.exports = {
    getPlans
};
