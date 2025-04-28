function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    console.log(carrinho);

    var cartItens = document.getElementById("cartItens");
    cartItens.innerHTML = "";

    var quantidadeItens = document.getElementById("quantidadeItens");
    quantidadeItens.textContent = carrinho.length

    var cartTotal = document.getElementById("cartTotal");

    var total = 0;

    carrinho.forEach((item, index) => {
        var li = document.createElement("li");
        li.className = "card list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `${item.nome} - ${item.preco} <button class="apagar" onclick = "deletItem(${index})"></button>`;
        cartItens.appendChild(li);
    });
    var precoNumero = parseFloat(item.preco.replace("R$", "").replace(",", "."));
    total += precoNumero
    document.getElementById("cartTotal").innerText = `Total: R$ ${total.toFixed(2)};`
}

carregarCarrinho();

function deletItem(index) {
    carrinho = JSON.parse(localStorage.getItem("carrinho"))||[]
    carrinho.splice(index, 1)
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    carregarCarrinho()
}