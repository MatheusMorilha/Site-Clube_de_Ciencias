async function Duvidas() {
    try{
    var duvidas = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22duvidas%22%5D%7B%0A++%22id%22%3A_id%2C%0A++++pergunta%2C%0A++++resposta%0A%7D%0A", {
        method: "GET"
    });
    var respostaEmJson = await duvidas.json();
    
    // Selecione o contêiner onde você deseja exibir as perguntas e respostas
    const duvidasContainer = document.getElementById("duvidasContainer");

    // Itere por todas as perguntas e respostas na resposta da API
    for (const duvida of respostaEmJson.result) {
        // Crie elementos HTML para cada conjunto de pergunta e resposta
        const perguntaDiv = document.createElement("p");
        const botao = document.createElement("button");
        botao.classList.add("campo-freq");
        botao.type = "button";
        botao.setAttribute("data-bs-toggle", "collapse");
        botao.setAttribute("data-bs-target", `#collapse${duvida.id}`);
        botao.setAttribute("aria-expanded", "false");
        botao.setAttribute("aria-controls", `collapse${duvida.id}`);
        const span = document.createElement("span");
        span.innerText = duvida.pergunta;
        botao.appendChild(span);
        perguntaDiv.appendChild(botao);

        const respostaDiv = document.createElement("div");
        respostaDiv.classList.add("collapse");
        respostaDiv.id = `collapse${duvida.id}`;
        const card = document.createElement("div");
        card.classList.add("card", "card-body");
        card.innerText = duvida.resposta;
        respostaDiv.appendChild(card);

        // Adicione os elementos ao contêiner de dúvidas
        duvidasContainer.appendChild(perguntaDiv);
        duvidasContainer.appendChild(respostaDiv);
    }
    }catch(error){
        console.error('Falha na busca dos dados');
    }

}

Duvidas();