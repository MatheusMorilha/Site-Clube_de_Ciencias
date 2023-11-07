// Função para buscar dados da API
async function buscarDadosAPI(url, elementoId) {
    try {
        const resultado = await fetch(url, {
            method: "GET"
        });

        if (!resultado.ok) {
            throw Error(`Erro na solicitação: ${resultado.status}`);
        }

        const respostaEmJson = await resultado.json();
        const dados = respostaEmJson.result;

        // Adicione os dados ao elemento HTML com o ID fornecido
        const elemento = document.getElementById(elementoId);

        for (let i = 0; i < dados.length; i++) {
            const dado = dados[i];

            // Crie um parágrafo para exibir a descrição
            const descricaoP = document.createElement("p");
            descricaoP.textContent = dado.descricao;

            // Adicione o parágrafo ao elemento
            elemento.appendChild(descricaoP);
        }
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
}

// Chame a função para buscar e adicionar os dados das APIs
buscarDadosAPI("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22metodo%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", "metodos");

buscarDadosAPI("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22certificado%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", "certificados");

buscarDadosAPI("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22premios%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", "premios");
