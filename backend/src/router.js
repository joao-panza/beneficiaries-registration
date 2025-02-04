const express = require('express');
const router = express.Router();
const proposalController = require('./app/controllers/proposalController');
const plansController = require('./app/controllers/plansController');

router.post('/proposal', proposalController.createProposal);

router.get('/plans', plansController.getPlans);

module.exports = router;