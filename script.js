function carregar() {
    fetch('http://localhost:3000/produtos/')

  
        .then(res => res.json())
        .then(produtos => {
            const card = document.getElementById("card");

            produtos.map(produto => {
                const card = document.getElementByIdh("div")
                card.classList.add("card")

                const nome = document.createElement("h1")
                nome.textContent = produto.nome

                card.appendChild(h1)

            })
        });

}
carregar()





















// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//       const response = await fetch("http://localhost:3000/produtos/"); 
//       const produto = await response.json();
//       console.log(produto);

//       document.getElementById('nome').innerText = produto.nome;
//       document.querySelector('.preco').innerText = `R$ ${produto.preco.toFixed(2)}`;
//       document.getElementById('descricao').innerText = produto.descricao;
//     } catch (error) {
//       console.error('Erro ao buscar o produto:', error);
//     }
//   });