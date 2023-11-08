async function Clube() {
    try {
        var clube = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22clube%22%5D%7B%0A++descricao%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++faixa_idade_inicio%2C%0A++faixa_idade_fim%2C%0A++horarios-%3E%7B%0A++++turno_manha%2C%0A++++turno_tarde%2C%0A++++dias_semana%2C%0A++++turma%0A++%7D%0A%7D", {
            method: "GET"
        })

        var respostaEmJsonClube = await clube.json();
        var dadosClube = respostaEmJsonClube.result[0];

        document.getElementById("descClube").innerText = dadosClube.descricao;
        document.getElementById("imgClube").src = dadosClube.imagem;
        document.getElementById("faixa_idadeClube").innerText = `${dadosClube.faixa_idade_inicio} - ${dadosClube.faixa_idade_fim} ANOS`;

        document.getElementById("turno_manhaClube").innerText = dadosClube.horarios.turno_manha;
        document.getElementById("turno_tardeClube").innerText = dadosClube.horarios.turno_tarde;

        var tabela = document.getElementById("tabela_horariosClube");
        var dias = dadosClube.horarios.dias_semana;
        var turmas = dadosClube.horarios.turma;

        for (var i = 0; i < dias.length; i++) {
            var tr = tabela.insertRow();
            var dia = tr.insertCell(0);
            var turma = tr.insertCell(1);

            dia.innerHTML = dias[i];
            turma.innerHTML = turmas[i];
        }
    } catch (error) {
        console.error('Falha na busca dos dados');
    }
}

Clube();