// Função para buscar dados da API
async function Equipe() {
    try {
        let resultadoEquipe = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22lista_premios%22%5D+%7B%0A++_id%2C%0A++titulo%2C%0A++imagem%2C%0A++descricao%2C%0A++%22imagemUrl%22%3A+imagem.asset-%3Eurl%0A%7D%0A", {
            method: "GET"
        });

        if (!resultadoEquipe.ok) {
            throw Error(`Erro na solicitação: ${resultadoEquipe.status}`);
        }

        let respostaEmJsonEquipeP = await resultadoEquipe.json();
        let resultadoAPI = respostaEmJsonEquipeP.result;

        // Adicione mensagens de console para depuração

        // Ordenar os resultados com base no número do título
        resultadoAPI.sort((a, b) => {
            const numeroA = parseInt(a.titulo.match(/\d+/)[0]);
            const numeroB = parseInt(b.titulo.match(/\d+/)[0]);
            return numeroA - numeroB;
        });

        return resultadoAPI;
    } catch (error) {
        console.error('Falha na busca dos dados');
    }
}

// Função para criar elementos na página com controle de caracteres
async function listaPremios() {
    try {
        let resultadoAPIlistaPremios = await Equipe();


        const Document = document.getElementById("div-premios");


        const maxCaracteres = 250; // Defina o número máximo de caracteres desejado por descrição


        for (let i = 0; i < resultadoAPIlistaPremios.length; i++) {
            const equipe = resultadoAPIlistaPremios[i];

            const criarDivPremio = document.createElement("div");
            criarDivPremio.className = "premios";

            const criarImagem = document.createElement("img");
            criarImagem.src = equipe.imagemUrl;
            criarImagem.alt = "";

            const criarDivTitulo = document.createElement("h1");
            criarDivTitulo.textContent = equipe.titulo;

            const criarDivDescricao = document.createElement("p");

            // Controlar a quantidade de caracteres na descrição
            criarDivDescricao.textContent = equipe.descricao.slice(0, maxCaracteres);

            criarDivPremio.appendChild(criarImagem);
            criarDivPremio.appendChild(criarDivTitulo);
            criarDivPremio.appendChild(criarDivDescricao);

            Document.appendChild(criarDivPremio);

        }
    } catch (error) {
        console.error('Falha na busca dos dados');
    }
}

listaPremios();