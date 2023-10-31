async function Preclube(){
    var resultado = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27preclube%27%5D%7B%0A++descricao%2C+%0A++++faixa_idade_fim%2C%0A++++faixa_idade_inicio%2C%0A++horarios-%3E%7B%0A++++turno_manha%2C%0A++++turno_tarde+%2C%0A++++dias_semana%2C%0A++++turma%0A++%7D%2C%0A%22imagem%22%3A+imagem.asset-%3Eurl%0A%7D%0A++%0A",
    {
    method:"GET"
    
    })
    
    var respostaEmJson = await resultado.json()
    var resultadoAPI = respostaEmJson.result
    return resultadoAPI
    
    }
    async function Apresentar(){
    
        var resultadoAPI = await Preclube();
        console.log(resultadoAPI);
    
        document.getElementById("descPC").innerText=resultadoAPI[0].descricao
        document.getElementById("faixa_idadePreClube").innerText = `${resultadoAPI[0].faixa_idade_inicio} - ${resultadoAPI[0].faixa_idade_fim} ANOS`;
        document.getElementById("turno_manhaPreClube").innerText= `${resultadoAPI[0].horarios.turno_manha}  `
        document.getElementById("turno_tardePreClube").innerText= `${resultadoAPI[0].horarios.turno_tarde}  `
        document.getElementById("dia_semanaPreClube1").innerText= `${resultadoAPI[0].horarios.dias_semana[0]}  `
        document.getElementById("dia_semanaPreClube2").innerText= `${resultadoAPI[0].horarios.dias_semana[1]}  `
        document.getElementById("turmapc1").innerText= `${resultadoAPI[0].horarios.turma[0]}  `
        document.getElementById("turmapc2").innerText= `${resultadoAPI[0].horarios.turma[1]}  `
        document.getElementById("imgPreClube").src=resultadoAPI[0].imagem
        
    }
    
    Apresentar();
    