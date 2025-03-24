var email = ""
var password = ""
var resultadoSenha = ""
var resultadoEmail = ""

function verificar() {;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    validarSenha()
    validarEmail()
    login(

    )
}
function validarSenha() {
    senhaValidada = password.length;
    console.log(senhaValidada)
    if (senhaValidada > 3 && senhaValidada < 5) {
        resultadoSenha = "fraca"
        console.log(resultadoSenha)
    }
    else if (senhaValidada >= 6 && senhaValidada <= 7) {
        resultadoSenha = "média"
        console.log(resultadoSenha)
    }
    else if (senhaValidada >= 8 && senhaValidada <= 12){
        resultadoSenha = "forte"
        console.log(resultadoSenha)
    }
    else{
        resultadoSenha = "muito curta ou longa"
        console.log(resultadoSenha)
    }
}
function validarEmail() {
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        resultadoEmail = "válido"
        console.log(resultadoEmail)
    }
    else{
        alert("email inválido!")
    }
}
function login() {
    if (resultadoSenha === "fraca") {
        alert("login inválido, senha fraca")
    }
    else if (resultadoSenha === "muito curta ou longa"){
        alert("login inválido, senha muito curta ou longa")
    }
    else if (resultadoSenha === "forte" && resultadoEmail === "válido"){
        window.location.href = "tela2.html"
    }
    else if (resultadoSenha === "média" && resultadoEmail === "válido"){
        window.location.href = "tela2.html"
    }
}
// Dados fictícios para produtos com novas imagens de notebooks

const produtos = [
    { nome: "Camisa Preta Lisa BA", preco: "R$ 79,99", img: "./camisa preta.png" },
    { nome: "Camisa Branca Lisa BA", preco: "R$ 79,99", img: "./camisa branca.png" },
    { nome: "Camisa Vermelha Lisa BA", preco: "R$ 79,99", img: "./camisa vermelha.png" },
    { nome: "Notebook HP Pavilion", preco: "R$ 6.199", img: "https://images.pexels.com/photos/12128117/pexels-photo-12128117.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Lenovo Ideapad", preco: "R$ 5.499", img: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Gamer MSI", preco: "R$ 8.799", img: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Samsung Galaxy Book", preco: "R$ 4.799", img: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Acer Aspire 5", preco: "R$ 3.699", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Dell Inspiron", preco: "R$ 4.488", img: "https://images.pexels.com/photos/411183/pexels-photo-411183.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Asus VivoBook", preco: "R$ 5.999", img: "https://images.pexels.com/photos/3560567/pexels-photo-3560567.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook HP Pavilion", preco: "R$ 6.199", img: "https://images.pexels.com/photos/12128117/pexels-photo-12128117.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Lenovo Ideapad", preco: "R$ 5.499", img: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Gamer MSI", preco: "R$ 8.799", img: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Samsung Galaxy Book", preco: "R$ 4.799", img: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
  ];

const swiperWrapper = document.querySelector('.swiper-wrapper');

produtos.forEach(produto => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `
    <img src="${produto.img}" alt="${produto.nome}" class="product-image" data-nome="${produto.nome}" data-preco="${produto.preco}">
    <h3>${produto.nome}</h3>
    <p>${produto.preco}</p>
  `;

  // Adiciona evento de clique para abrir o modal
  slide.querySelector('.product-image').addEventListener('click', function () {
    abrirModalProduto(this);
  });

  swiperWrapper.appendChild(slide);
});

// Inicializa o Swiper.js
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
var carrinho = [];

// Função para abrir o modal e preencher com os detalhes do produto
function abrirModalProduto(element) {
  const nome = element.getAttribute("data-nome");
  const preco = element.getAttribute("data-preco");
  const imagem = element.getAttribute("src");

  document.getElementById("modalProductImage").src = imagem;
  document.getElementById("modalProductName").innerText = nome;
  document.getElementById("modalProductPrice").innerText = preco;

  var addToCartBtn = document.getElementById("addToCart");
  addToCartBtn.setAttribute("data-nome", nome)
  addToCartBtn.setAttribute("data-preco", preco)

  // Exibe o modal
  var modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
}
// Adicionando um evento de clique no botão dentro do modal
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addToCart").addEventListener("click", function () {
      const nome = this.getAttribute("data-nome");
      const preco = this.getAttribute("data-preco");
  
      adicionarAoCarrinho(nome, preco);
    });
  });
  function adicionarAoCarrinho(nome, preco) {
    carrinho = JSON.parse(localStorage.getItem("carrinho"))||[]
    carrinho.push({nome, preco})
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }
  function irAoCarrinho() {
    window.location.href = "carrinho.html"
  }