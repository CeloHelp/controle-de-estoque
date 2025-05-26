const Estoque = require('../models/Estoque');

exports.listarItens = (req, res) => {
  res.json(Estoque.getAll());
};

exports.buscarItemPorId = (req, res) => {
  const item = Estoque.getById(parseInt(req.params.id));
  if (!item) return res.status(404).json({ mensagem: 'Item não encontrado' });
  res.json(item);
};

exports.adicionarItem = (req, res) => {
  const { nome, tipo, quantidade } = req.body;
  if (!nome || !tipo || quantidade == null) {
    return res.status(400).json({ mensagem: 'Dados incompletos' });
  }
  const novoItem = Estoque.add({ nome, tipo, quantidade });
  res.status(201).json(novoItem);
};

exports.atualizarItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, tipo, quantidade } = req.body;
  const atualizado = Estoque.update(id, { nome, tipo, quantidade });
  if (!atualizado) return res.status(404).json({ mensagem: 'Item não encontrado' });
  res.json(atualizado);
};

exports.removerItem = (req, res) => {
  const id = parseInt(req.params.id);
  const removido = Estoque.remove(id);
  if (!removido) return res.status(404).json({ mensagem: 'Item não encontrado' });
  res.json({ mensagem: 'Item removido com sucesso' });
};
