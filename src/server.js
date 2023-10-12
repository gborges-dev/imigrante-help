const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco_de_dados',
  },
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Exemplo de rota para obter dados do banco de dados
app.get('/api/users', async (req, res) => {
  try {
    const users = await knex.select().from('users');
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Rota para processar doações
app.post('/api/donate', (req, res) => {
    const { amount } = req.body;
  
    // Lógica para processar a doação (pode ser armazenar no banco de dados, chamar um serviço de pagamento, etc.)
    // Aqui, apenas simularemos uma resposta de sucesso.
    res.json({ message: `Doação de ${amount} recebida com sucesso!` });
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});