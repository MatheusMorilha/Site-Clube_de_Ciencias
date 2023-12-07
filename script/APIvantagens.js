// Função para buscar dados da API
async function buscarDadosAPI(url, elementoId) {
    try {
        const vantagens = await fetch(url, {
            method: "GET"
        });

        const respostaEmJsonVan = await vantagens.json();
        const dadosVan = respostaEmJsonVan.result;

        // Adicione os dados ao elemento HTML com o ID fornecido
        const elemento = document.getElementById(elementoId);

        for (let i = 0; i < dadosVan.length; i++) {
            const dado = dadosVan[i];

            // Crie um parágrafo para exibir a descrição
            const descricaoP = document.createElement("p");
            descricaoP.textContent = dado.descricao;

            // Adicione o parágrafo ao elemento
            elemento.appendChild(descricaoP);
        }
    } catch (error) {
        console.error('Falha na busca dos dados');
    }
}

// Chame a função para buscar e adicionar os dados das APIs
buscarDadosAPI("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22metodo%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", "metodos");

buscarDadosAPI("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22certificado%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", "certificados");

buscarDadosAPI("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22premios%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", "premios");
