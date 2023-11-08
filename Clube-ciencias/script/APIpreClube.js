async function Preclube() {
    try {
        var preClube = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27preclube%27%5D%7B%0A++descricao%2C+%0A++++faixa_idade_fim%2C%0A++++faixa_idade_inicio%2C%0A++horarios-%3E%7B%0A++++turno_manha%2C%0A++++turno_tarde+%2C%0A++++dias_semana%2C%0A++++turma%0A++%7D%2C%0A%22imagem%22%3A+imagem.asset-%3Eurl%0A%7D%0A++%0A", {
            method: "GET"
        });

        var respostaEmJsonPre = await preClube.json();
        var resultadoPre = respostaEmJsonPre.result;

        document.getElementById("descPC").innerText = resultadoPre[0].descricao;
        document.getElementById("faixa_idadePreClube").innerText = `${resultadoPre[0].faixa_idade_inicio} - ${resultadoPre[0].faixa_idade_fim} ANOS`;
        document.getElementById("turno_manhaPreClube").innerText = resultadoPre[0].horarios.turno_manha;
        document.getElementById("turno_tardePreClube").innerText = resultadoPre[0].horarios.turno_tarde;
        document.getElementById("dia_semanaPreClube1").innerText = resultadoPre[0].horarios.dias_semana[0];
        document.getElementById("dia_semanaPreClube2").innerText = resultadoPre[0].horarios.dias_semana[1];
        document.getElementById("turmapc1").innerText = resultadoPre[0].horarios.turma[0];
        document.getElementById("turmapc2").innerText = resultadoPre[0].horarios.turma[1];
        document.getElementById("imgPreClube").src = resultadoPre[0].imagem;

    } catch (error) {
        console.error('Falha na busca dos dados');
    }
}

Preclube();