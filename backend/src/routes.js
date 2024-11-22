const express = require("express");

const routes = express.Router();
const users = [
  {
    id: 1,
    name: "teste",
    email: "teste@gmail.com.br",
    password: "123456",
  },
];

// Rota de Login
routes.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(401).json({ message: "Credenciais inválidas" });
});

// Rota de Cadastro
routes.post("/cadastro", (req, res) => {
  const { name, email, password } = req.body;

  // Verifica se o email já existe
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email já cadastrado" });
  }

  // Adiciona o novo usuário
  const newUser = {
    id: users.length + 1, // Gera um ID sequencial
    name,
    email,
    password,
  };

  users.push(newUser);

  return res.status(201).json(newUser); // Retorna o usuário criado
});

module.exports = routes;
