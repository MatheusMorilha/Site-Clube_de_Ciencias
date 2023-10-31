
async function Noticias() {
    var noticias = await fetch("https://ko6qqthj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22noticia%22%5D+%7C+order%28data+desc%29%7B%0A++%22id%22%3A_id%2C%0A++++titulo%2C%0A++++subtitulo%2C%0A++++conteudo%2C%0A++++%22imagem%22%3Aimagem.asset-%3Eurl%2C%0A++++data%0A%7D%0A", {
        method: "GET"
    });
    var respostaEmJson = await noticias.json();

    const noticiasContainer = document.getElementById("noticiasContainer");

    for (const noticia of respostaEmJson.result) {
        // Crie elementos HTML para cada conjunto de notícias
        const noticiaDiv = document.createElement("div");
        noticiaDiv.classList.add("noticia");

        const txtDiv = document.createElement("div");
        txtDiv.classList.add("txt");

        const tituloP = document.createElement("p");
        tituloP.classList.add("titulo");
        tituloP.innerText = noticia.titulo;

        const subtituloP = document.createElement("p");
        subtituloP.classList.add("subtitulo");
        subtituloP.innerText = noticia.subtitulo;

        txtDiv.appendChild(tituloP);
        txtDiv.appendChild(subtituloP);

        var arraydesc = noticia.conteudo.split("§");
        arraydesc.forEach(element => {
            const descricaoP = document.createElement("p");
            descricaoP.classList.add("descricao");
            descricaoP.innerText = element;
            
            descricaoP.style.textIndent = "30px";
            txtDiv.appendChild(descricaoP);
        });


        const dataP = document.createElement("p");
        dataP.classList.add("descricao");
        dataP.innerText = noticia.data;

        const picture = document.createElement("picture");
        const img = document.createElement("img");
        img.classList.add("img-noticia");
        img.alt = "";
        img.src = noticia.imagem + "?h=600&w=600";


        txtDiv.appendChild(dataP);

        picture.appendChild(img);

        noticiaDiv.appendChild(txtDiv);
        noticiaDiv.appendChild(picture);

        noticiasContainer.appendChild(noticiaDiv);
    }

    console.log(respostaEmJson);
}

Noticias();





