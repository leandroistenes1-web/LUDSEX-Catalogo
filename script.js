const botoes = document.querySelectorAll('.filtro');
const produtos = document.querySelectorAll('.produto');

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
        const categoria = botao.textContent.trim();
        produtos.forEach(produto => {
            if(categoria === 'Todos') {
                produto.style.display = 'block';
            }
            else if(categoria === "Lingerie") {
                produto.style.display =
                produto.classList.contains('lingerie') ? 'block' : 'none';
            }
            else if(categoria === "Sex Shop") {
                produto.style.display =
                produto.classList.contains('sexshop') ? 'block' : 'none';
            }           
        });
    });
});

// =========================
// ZOOM DAS IMAGENS
// =========================

const imagensZoom = document.querySelectorAll(".imagem-zoom");
const zoomImagem = document.getElementById("zoom-imagem");
const imagemAmpliada = document.getElementById("imagem-ampliada");
const fecharZoom = document.querySelector(".fechar-zoom");

imagensZoom.forEach(function(imagem) {
    imagem.addEventListener("click", function() {
        imagemAmpliada.src = imagem.src;
        zoomImagem.classList.add("ativo");
    });
});

fecharZoom.addEventListener("click", function() {
    zoomImagem.classList.remove("ativo");
});

zoomImagem.addEventListener("click", function(evento) {
    if (evento.target === zoomImagem) {
        zoomImagem.classList.remove("ativo");
    }
});