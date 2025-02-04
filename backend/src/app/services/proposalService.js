const faixa1 = {"min": 0, "max": 17};
const faixa2 = {"min": 18, "max": 40};
const proposalModel = require('../models/proposalModel');

const createProposal = async (data) =>{
    const { qtdBeneficiarios } = data;
    const { registroPlano } = data;
    const { beneficiarios } = data;

    const plans = await proposalModel.getPlans();
    const prices = await proposalModel.getPrices();

    let planCode = 0
    plans.forEach(plan => {
        if(plan.registro == registroPlano){
            planCode = plan.codigo;
        }
        else{
            console.log("Registro de plano não encontrado.");
        }
    });

    let options = []
    prices.forEach(price => {
        if(price.codigo == planCode){
            options.push(price);
        }
    });

    // options.forEach(option => {
    //     if(option.minimo_vidas == qtdBeneficiarios){
            
    //     }
    // });

    // Loop para atribuição de faixa para cada beneficiário
    let assigned = []
    for(let i=0; i<beneficiarios.length; i++){
        assigned[i] = assignAgeGroup(beneficiarios[i]);
    }

    return assigned;
}

function assignAgeGroup(beneficiario) {
    const idade = beneficiario.idade;

    if (idade >= faixa1.min && idade <= faixa1.max) {
        return { ...beneficiario, faixa: 1 };
    } else if (idade >= faixa2.min && idade <= faixa2.max) {
        return { ...beneficiario, faixa: 2 };
    } else {
        return { ...beneficiario, faixa: 3 };
    }
}

module.exports ={
    createProposal
}
