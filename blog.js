let form = document.getElementById("blog_form");
        form.addEventListener("submit",createPost);

function createPost(event){
    event.preventDefault();

    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let article = document.createElement("article");
    let iconoBorrar = document.createElement("i");
    let iconoEditar = document.createElement("i");
    iconoBorrar.addEventListener("click",deletePost);
    iconoEditar .addEventListener("click",updatePost);
    
    let textTitulo = document.getElementById("titulo").value;
    let textContenido = document.getElementById("contenido").value;

    h3.innerText = textTitulo;
    p.innerText = textContenido;

    iconoBorrar.classList.add("fa","fa-close");
    iconoEditar.classList.add("fa","fa-pencil");
    
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(iconoBorrar);
    article.appendChild(iconoEditar);
  
    document.getElementById("blog_seccion").appendChild(article);
   
    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";
}

function deletePost(event){
    let element = event.target;
    let parent = element.parentElement;
    let text = parent.innerText;
    if(confirm("¿Deseas borrar este elemento? \n" + text)){

        parent.remove();

    }

}
function updatePost(event){
    let element = event.target;
    let parent = element.parentElement;
    let titulo = parent.getElementsByTagName("h3")[0].innerText;
    let texto = parent.getElementsByTagName("p")[0].innerText;
    let inputTitulo = document.createElement("input");
    let textArea = document.createElement("textArea");
    let br = document.createElement("br");

    inputTitulo.setAttribute("type","text");
    inputTitulo.value = titulo;
    textArea.value = texto;
    parent.appendChild(inputTitulo);
    parent.appendChild(br);
    parent.appendChild(textArea);

}





/*function deletePost(event){
    let element = event.target;
    let parent = element.parentElement;
    parent.remove();
    let text = parent.getElementByTagName("h3").innerText;
    if(confirm("¿Deseas borrar este elemento? \n" + text)){

        parent.remove();
    }
}*/


/*
let posts = [article];
function ultimoPrimero(){
    posts.sort(function(a, b){return b - a});
    document.getElementsByTagName("article").innerHTML = posts;
}




    for(i = 0; i<article.lenght;i++){
    }
    document.getElementsByTagName("article").innerHTML = article;
posts.reverse([i]);
*/