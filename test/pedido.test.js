const assert = require("assert");
const Pedido = require("../pedido");

describe("Sistema de Pedidos - Hamburgueria", () => {
  let pedido;

  beforeEach(() => {
    pedido = new Pedido();
  });

  it("Deve adicionar itens ao pedido", () => {
    pedido.adicionarItem("Hambúrguer", 10.5, 2);
    pedido.adicionarItem("Batata Frita", 5.0, 1);
    assert.strictEqual(pedido.itens.length, 2);
  });

  it("Deve calcular o total do pedido corretamente", () => {
    pedido.adicionarItem("Hambúrguer", 10.5, 2);
    pedido.adicionarItem("Batata Frita", 5.0, 1);
    const total = pedido.calcularTotal();
    assert.strictEqual(total, 31.0);
  });

  it("Deve aplicar desconto ao pedido", () => {
    pedido.adicionarItem("Hambúrguer", 10.0, 2);
    pedido.aplicarDesconto("PROMO10");
    const totalComDesconto = pedido.calcularTotal();
    assert.strictEqual(totalComDesconto, 23.0);
  });

  it("Deve lançar erro para código promocional inválido", () => {
    assert.throws(
      () => pedido.aplicarDesconto("INVALIDO"),
      /Código promocional inválido./
    );
  });

  it("Deve confirmar o pedido se houver itens", () => {
    pedido.adicionarItem("Hambúrguer", 10.0, 1);
    pedido.confirmar();
    assert.strictEqual(pedido.status, "Confirmado");
  });

  it("Deve lançar erro ao confirmar pedido vazio", () => {
    assert.throws(
      () => pedido.confirmar(),
      /Pedido vazio. Adicione itens antes de confirmar./
    );
  });

  it("Deve cancelar o pedido", () => {
    pedido.cancelar();
    assert.strictEqual(pedido.status, "Cancelado");
  });
});
