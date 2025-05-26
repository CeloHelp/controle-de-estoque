const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

// Listar todos os itens
router.get('/', estoqueController.listarItens);
// Buscar item por ID
router.get('/:id', estoqueController.buscarItemPorId);
// Adicionar novo item
router.post('/', estoqueController.adicionarItem);
// Atualizar item
router.put('/:id', estoqueController.atualizarItem);
// Remover item
router.delete('/:id', estoqueController.removerItem);

module.exports = router;
