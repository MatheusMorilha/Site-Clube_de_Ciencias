async function Laboratorios() {
    try{
    var resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27laboratorios%27%5D+%7C+order%28_createdAt%C2%A0asc%29%7B%0A++titulo%2C%0A++descricao%2C%0A++%22imagem%22%3Aimagem%5B%5D.asset-%3Eurl%0A%7D%0A", {
        method: "GET"
    });

    var respostaEmJson = await resultado.json();
    var resultadoAPI = respostaEmJson.result;
    return resultadoAPI;
}catch(error){
    console.error('Falha na busca dos dados');
}
}

async function APRESENTAR() {
    try{
    var resultadoAPI = await Laboratorios();

    const criarDivCards = document.querySelector(".cards");

    for (let i = 0; i < resultadoAPI.length; i++) {
        const laboratorios = resultadoAPI[i];

        const criarDivCard = document.createElement("div");
        criarDivCard.className = "card";

        if (i % 2 !== 0) {
            criarDivCard.classList.add("reverse");
        }

        const criarDivTextos = document.createElement("div");
        criarDivTextos.className = "txt";

        const criarTitulo = document.createElement("p");
        criarTitulo.className = "lab";
        criarTitulo.innerText = laboratorios.titulo;

        const criarDescricao = document.createElement("p");
        criarDescricao.className = "desc-lab";
        criarDescricao.innerText = laboratorios.descricao;

        const criarDivImagens = document.createElement("div");
        criarDivImagens.className = "card-img";

        
        const divImagemGrande = document.createElement("div");
        divImagemGrande.className = "large-image-container";

        const imagemGrande = document.createElement("img");
        imagemGrande.src = laboratorios.imagem[0];
        imagemGrande.style.width = "500px";
        imagemGrande.style.height = "300px";

        divImagemGrande.appendChild(imagemGrande);
        criarDivImagens.appendChild(divImagemGrande);

        
        const divImagensMenores = document.createElement("div");
        divImagensMenores.className = "small-images-container";

        for (let j = 1; j < laboratorios.imagem.length; j++) {
            const imagemUrl = laboratorios.imagem[j];
            const criarImagem = document.createElement("img");

            criarImagem.src = imagemUrl;
            criarImagem.style.width = "200px";
            criarImagem.style.height = "150px";

            divImagensMenores.appendChild(criarImagem);
        }

        criarDivImagens.appendChild(divImagensMenores);

        criarDivTextos.appendChild(criarTitulo);
        criarDivTextos.appendChild(criarDescricao);

        criarDivCard.appendChild(criarDivTextos);
        criarDivCard.appendChild(criarDivImagens);

        criarDivCards.appendChild(criarDivCard);
    }
}catch(error){
    console.error('Falha na busca dos dados');
}
}

APRESENTAR();
