function pesquisar() {
   // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Adiciona um ouvinte de evento para detectar a tecla "Enter" no campo de pesquisa
    document.getElementById('campo-pesquisa').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            pesquisar();  // Chama a função pesquisar quando "Enter" é pressionado
        }
    });

    // Verifica se o campo de pesquisa está vazio
    if(!campoPesquisa){
        //section.innerHTML = "<h2>Nada inserido</h2> <p>Por favor, você precisa colocar o nome da comida a ser buscada.</p>";(antiga forma feita).
        document.getElementById('resultados-pesquisa').innerHTML = '<p class="mensagem-erro">Nada inserido<br>Por favor, você precisa colocar o nome da comida a ser buscada.</p>';
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Cria uma variável para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria um novo elemento HTML para exibir o dado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Link para receitas</a>
            </div>`;
        }
    }

    if(!resultados){
    resultados = "<h2 class='mensagem-erro'>Nenhum resultado encontrado.</h2>";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}