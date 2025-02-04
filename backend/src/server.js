const app = require('./app');
const PORT = 3333;

app.listen(PORT,()=>{
    console.log(`Server rodando na porta ${PORT}.`);
});