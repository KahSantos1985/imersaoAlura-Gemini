function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de depuração, mostra a seção no console
  
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma String sem nada
    if(campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
        return
    }
    
    // Pesquisar letras minúsculas e maiúsculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados e cria o HTML correspondente
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
            //cria um novo elemento

        //Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais Informações</a> 
            </div> 
        `;
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Insere o HTML gerado na seção selecionada
    section.innerHTML = resultados;
  }