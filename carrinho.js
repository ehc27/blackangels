function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    console.log(carrinho);

    var cartItens = document.getElementById("cartItens");
    cartItens.innerHTML = "";

    var total = 0;

    carrinho.forEach((item) => {
        total += parseFloat(item.preco.replace("R$", "").replace(",", "."));

        var li = document.createElement("li");
        li.innerHTML = `${item.nome} - ${item.preco}`;
        cartItens.appendChild(li);
    });

    document.getElementById("cartTotal").innerText = `Total: R$ ${total.toFixed(2)};`
}

carregarCarrinho();