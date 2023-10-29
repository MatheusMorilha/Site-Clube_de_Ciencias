async function Equipe() {
    let resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=+*%5B_type+%3D%3D+%22lista_premios%22%5D+%7B%0A++_id%2C%0A++++titulo%2C%0A++++imagem%2C%0A++descricao%2C%0A++%22imagemUrl%22%3A+imagem.asset-%3Eurl%0A%7D%0A", {
        method: "GET"
    });

    let respostaEmJson = await resultado.json();
    let resultadoAPI = respostaEmJson.result;
    return resultadoAPI;
}

async function Lista_premios() {
    let resultadoAPI = await Equipe();
    console.log(resultadoAPI);

    const Document = document.getElementById("div-premios");

    for (let i = 0; i < resultadoAPI.length; i++) {
        const equipe = resultadoAPI[i];

        const criarDivPremio = document.createElement("div");
        criarDivPremio.className = "premios";

        const criarImagem = document.createElement("img");
        criarImagem.src = equipe.imagemUrl; 
        criarImagem.alt = "";

        const criarDivTitulo = document.createElement("h1");
        criarDivTitulo.textContent = equipe.titulo; 

        const criarDivDescricao = document.createElement("p");
        criarDivDescricao.textContent = equipe.descricao; 

        criarDivPremio.appendChild(criarImagem);
        criarDivPremio.appendChild(criarDivTitulo);
        criarDivPremio.appendChild(criarDivDescricao);

        Document.appendChild(criarDivPremio);
    }
}

Lista_premios();
