document.getElementById("buscador").addEventListener("keyup", filtrarPosts);

function filtrarPosts(){

    let text = document.getElementById("buscador").value.toLowerCase(); //coge los valores ponemos en el input con id="buscador"
    let section = document.getElementById("blog_seccion"); 
    let titulos = section.querySelectorAll("article > h3"); //selecciona todos los h3 (el primero) que están en los article
    titulos = [...titulos]; //para convertir la lista de los h3 en un array
  
    let titulosFiltrados = titulos.filter(titulo => !titulo.innerText.toLowerCase().includes(text)); //filtra el array [titulos] y lo compara con las palabras (text) que metes en el buscador

    titulos.forEach(titulo => { 
        let article = titulo.parentElement;
        article.style.display= "block";
    })

    titulosFiltrados.forEach(titulo => {
        let article = titulo.parentElement;
        article.style.display= "none";
    });

}
