const proposalService = require('../services/proposalService');

const createProposal = async (req, res) =>{
    const createdProposal = await proposalService.createProposal(req.body);
    return res.status(201).json(createdProposal);
}

module.exports = {
    createProposal,
};
