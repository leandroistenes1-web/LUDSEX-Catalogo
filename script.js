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

