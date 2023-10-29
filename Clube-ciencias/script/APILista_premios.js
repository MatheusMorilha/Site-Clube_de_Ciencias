// Função para buscar dados da API
async function Equipe() {
    try {
        let resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22lista_premios%22%5D+%7B%0A++_id%2C%0A++titulo%2C%0A++imagem%2C%0A++descricao%2C%0A++%22imagemUrl%22%3A+imagem.asset-%3Eurl%0A%7D%0A", {
            method: "GET"
        });

        if (!resultado.ok) {
            throw Error(`Erro na solicitação: ${resultado.status}`);
        }

        let respostaEmJson = await resultado.json();
        let resultadoAPI = respostaEmJson.result;

        // Adicione mensagens de console para depuração
        console.log("Dados brutos da API:", resultadoAPI);

        // Ordenar os resultados com base no número do título
        resultadoAPI.sort((a, b) => {
            const numeroA = parseInt(a.titulo.match(/\d+/)[0]);
            const numeroB = parseInt(b.titulo.match(/\d+/)[0]);
            return numeroA - numeroB;
        });

        return resultadoAPI;
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        return [];
    }
}

// Função para criar elementos na página com controle de caracteres
async function Lista_premios() {
    try {
        let resultadoAPI = await Equipe();
        console.log(resultadoAPI);

        const Document = document.getElementById("div-premios");

        
        const maxCaracteres = 250; // Defina o número máximo de caracteres desejado por descrição


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

            // Controlar a quantidade de caracteres na descrição
            criarDivDescricao.textContent = equipe.descricao.slice(0, maxCaracteres);

            criarDivPremio.appendChild(criarImagem);
            criarDivPremio.appendChild(criarDivTitulo);
            criarDivPremio.appendChild(criarDivDescricao);

            Document.appendChild(criarDivPremio);


            // function Stars(starSelector, ratingValueId) {
            //     const stars = document.querySelectorAll(starSelector);
            //     const ratingValue = document.getElementById(ratingValueId);

            //     stars.forEach((star) => {
            //         star.addEventListener("click", function () {
            //             const rating = parseInt(star.getAttribute("data-rating"));
            //             ratingValue.innerText = rating;
            //             stars.forEach((s) => {
            //                 const sRating = parseInt(s.getAttribute("data-rating"));
            //                 if (sRating <= rating) {
            //                     s.classList.add("selected");
            //                 } else {
            //                     s.classList.remove("selected");
            //                 }
            //             });
            //         });
            //     });
            // }

        }
    } catch (error) {
        console.error("Erro ao criar elementos na página:", error);
    }
}

Lista_premios();
