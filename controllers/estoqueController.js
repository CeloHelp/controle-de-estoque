const Estoque = require('../models/Estoque');

exports.listarItens = async (req, res) => {
  const itens = await Estoque.findAll();
  res.json(itens);
};

exports.buscarItemPorId = async (req, res) => {
  const item = await Estoque.findByPk(req.params.id);
  if (!item) return res.status(404).json({ mensagem: 'Item não encontrado' });
  res.json(item);
};

exports.adicionarItem = async (req, res) => {
  const { nome, marca, tipo, quantidade, descricao, imagem } = req.body;
  if (!nome || !marca || !tipo || quantidade == null) {
    return res.status(400).json({ mensagem: 'Dados incompletos' });
  }
  // Verifica se já existe um produto igual (nome, marca e tipo)
  const existente = await Estoque.findOne({ where: { nome, marca, tipo } });
  if (existente) {
    return res.status(409).json({ mensagem: 'Produto já cadastrado com mesmo nome, marca e tipo.' });
  }
  const novoItem = await Estoque.create({ nome, marca, tipo, quantidade, descricao, imagem });
  res.status(201).json(novoItem);
};

exports.atualizarItem = async (req, res) => {
  const { nome, marca, tipo, quantidade, descricao, imagem } = req.body;
  const item = await Estoque.findByPk(req.params.id);
  if (!item) return res.status(404).json({ mensagem: 'Item não encontrado' });
  item.nome = nome ?? item.nome;
  item.marca = marca ?? item.marca;
  item.tipo = tipo ?? item.tipo;
  item.quantidade = quantidade ?? item.quantidade;
  item.descricao = descricao ?? item.descricao;
  item.imagem = imagem ?? item.imagem;
  await item.save();
  // Retorna todos os campos atualizados
  res.json({
    id: item.id,
    nome: item.nome,
    marca: item.marca,
    tipo: item.tipo,
    quantidade: item.quantidade,
    descricao: item.descricao,
    imagem: item.imagem
  });
};

exports.removerItem = async (req, res) => {
  const item = await Estoque.findByPk(req.params.id);
  if (!item) return res.status(404).json({ mensagem: 'Item não encontrado' });
  await item.destroy();
  res.json({ mensagem: 'Item removido com sucesso' });
};
