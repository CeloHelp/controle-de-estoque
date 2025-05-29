const express = require('express');
const app = express();
const sequelize = require('./models/database');
const Estoque = require('./models/Estoque');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

const estoqueRoutes = require('./routes/estoque');

app.use(express.json());
app.use(cors());

// Rotas básicas para teste
app.get('/', (req, res) => {
  res.send('Sistema de Controle de Estoque - Amortecedores');
});

app.use('/estoque', estoqueRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
