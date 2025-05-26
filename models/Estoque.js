// Simulação de banco de dados em memória
let itens = [];
let idAtual = 1;

class Estoque {
  static getAll() {
    return itens;
  }
  static getById(id) {
    return itens.find(item => item.id === id);
  }
  static add({ nome, tipo, quantidade }) {
    const novoItem = { id: idAtual++, nome, tipo, quantidade };
    itens.push(novoItem);
    return novoItem;
  }
  static update(id, { nome, tipo, quantidade }) {
    const item = itens.find(i => i.id === id);
    if (!item) return null;
    if (nome !== undefined) item.nome = nome;
    if (tipo !== undefined) item.tipo = tipo;
    if (quantidade !== undefined) item.quantidade = quantidade;
    return item;
  }
  static remove(id) {
    const index = itens.findIndex(i => i.id === id);
    if (index === -1) return false;
    itens.splice(index, 1);
    return true;
  }
}

module.exports = Estoque;
