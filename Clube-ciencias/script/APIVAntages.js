// // // Função para buscar dados da API
// // async function Certificado() {
// //     try {
// //         lMetodost resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22lista_premios%22%5D+%7B%0A++_id%2C%0A++titulo%2C%0A++imagem%2C%0A++descricao%2C%0A++%22imagemUrl%22%3A+imagem.asset-%3Eurl%0A%7D%0A", {
// //         method: "GET"
// //     });

// //         if (!resultado.ok) {
// //             throw Error(`Erro na solicitação: ${resultado.status}`);
// //         }

// //         let respostaEmJson = await resultado.json();
// //         let resultadoAPI = respostaEmJson.result;

// //         // Adicione mensagens de console para depuração
// //         console.log("Dados brutos da API:", resultadoAPI);


// //         return resultadoAPI;
// //     } catch (error) {
// //         console.error("Erro ao buscar dados da API:", error);
// //         return [];
// //     }
// // }


// // // Função para buscar dados do certificado
// // async function Certificado() {
// //     var c = await fetch("", {
// //         method: "GET"
// //     })

// //     var respostaEmJson = await c.json()
// //     var dados = respostaEmJson.result[0]

// //     document.getElementById("metodo").innerText = dados.descricao;

// //     // Adicionar descrição em um elemento <p> inserido pelo JavaScript
// //     const descricaoP = document.createElement("p");
// //     descricaoP.textContent = dados.descricao; // Defina o conteúdo da descrição
// //     document.getElementById("metodo").appendChild(descricaoP);
// // }




// // async function Metodos() {
// //     try {
// //         lMetodost resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22metodo%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", {
// //         method: "GET"
// //     });

// //         if (!resultado.ok) {
// //             throw Error(`Erro na solicitação: ${resultado.status}`);
// //         }

// //         let respostaEmJson = await resultado.json();
// //         let resultadoAPI = respostaEmJson.result;

// //         // Adicione mensagens de console para depuração
// //         console.log("Dados brutos da API:", resultadoAPI);


// //         return resultadoAPI;
// //     } catch (error) {
// //         console.error("Erro ao buscar dados da API:", error);
// //         return [];
// //     }
// // }



// // // Função para buscar dados do certificado
// // async function Metodos() {
// //     var c = await fetch("", {
// //         method: "GET"
// //     })

// //     var respostaEmJson = await c.json()
// //     var dados = respostaEmJson.result[0]

// //     document.getElementById("metodo").innerText = dados.descricao;

// //     // Adicionar descrição em um elemento <p> inserido pelo JavaScript
// //     const descricaoP = document.createElement("p");
// //     descricaoP.textContent = dados.descricao; // Defina o conteúdo da descrição
// //     document.getElementById("metodo").appendChild(descricaoP);
// // }




// // async function Premios() {
// //     try {
// //         lMetodost resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22premios%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", {
// //         method: "GET"
// //     });

// //         if (!resultado.ok) {
// //             throw Error(`Erro na solicitação: ${resultado.status}`);
// //         }

// //         let respostaEmJson = await resultado.json();
// //         let resultadoAPI = respostaEmJson.result;

// //         // Adicione mensagens de console para depuração
// //         console.log("Dados brutos da API:", resultadoAPI);


// //         return resultadoAPI;
// //     } catch (error) {
// //         console.error("Erro ao buscar dados da API:", error);
// //         return [];
// //     }
// // }

// // // Função para criar elementos na página com controle de caracteres
// // async function Premios() {
// //     try {
// //         let resultadoAPI = await E();
// //         console.log(resultadoAPI);

// //         const Premios = document.getElementById("metodo");

// //         for (let i = 0; i < resultadoAPI.length; i++) {
// //             const Premios = resultadoAPI[i];
// //         }
// //     } catch (error) {
// //         console.error("Erro ao criar elementos na página:", error);
// //     }
// // }


// // Metodos();// Chame a função Certificado para buscar o certificado
// // Certificado();// Chame a função Descricao para criar elementos na página
// // Premios();// Chame a função Descricao para criar elementos na página


// // Função para buscar dados da API
// async function buscarDadosAPI(url) {
//     try {
//         const resultado = await fetch(url, {
//             method: "GET"
//         });

//         if (!resultado.ok) {
//             throw Error(`Erro na solicitação: ${resultado.status}`);
//         }

//         const respostaEmJson = await resultado.json();
//         const dados = respostaEmJson.result;

//         return dados;
//     } catch (error) {
//         console.error("Erro ao buscar dados da API:", error);
//         return [];
//     }
// }

// // Função para criar elementos na página com controle de caracteres
// function criarElementosNoHTML(dados, elementoId) {
//     try {
//         const elemento = document.getElementById(elementoId);

//         for (let i = 0; i < dados.length; i++) {
//             const dado = dados[i];

//             // Adicionar descrição em um elemento <p> inserido pelo JavaScript
//             const descricaoP = document.createElement("p");
//             descricaoP.textContent = dado.descricao;
//             elemento.appendChild(descricaoP);
//         }
//     } catch (error) {
//         console.error("Erro ao criar elementos na página:", error);
//     }
// }

// // Chame as funções para buscar e adicionar os dados das APIs
// async function consumirAPIs() {
//     try {
//         const certificadosURL = "https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22certificado%22%5D+%7B%0A++descricao%2C%0A++%7D%0A";
//         const metodoURL = "https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22metodo%22%5D+%7B%0A++descricao%2C%0A++%7D%0A";
//         const premiosURL = "https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22premios%22%5D+%7B%0A++descricao%2C%0A++%7D%0A";

//         const listaPremios = await buscarDadosAPI(certificadosURL);
//         criarElementosNoHTML(listaPremios, "metodo");

//         const metodos = await buscarDadosAPI(metodoURL);
//         criarElementosNoHTML(metodos, "metodo");

//         const premios = await buscarDadosAPI(premiosURL);
//         criarElementosNoHTML(premios, "metodo");
//     } catch (error) {
//         console.error("Erro ao consumir as APIs:", error);
//     }
// }

// // Chame a função para consumir as APIs
// consumirAPIs();

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
buscarDadosAPI("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22certificado%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", "certificados");

buscarDadosAPI("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22metodo%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", "metodos");

buscarDadosAPI("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22premios%22%5D+%7B%0A++descricao%2C%0A++%7D%0A", "premios");
