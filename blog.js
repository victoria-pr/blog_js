//submit
//donde añadir el Listener?
//conseguir valores del input
//meter los valores en blog seccion

let form = document.getElementById("blog_form");
        form.addEventListener("submit",createPost);

function createPost(event){
    event.preventDefault();

    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let article = document.createElement("article");
    
    let icono2 = document.createElement("i");
    let iconoarticle = document.createElement("i");
    article.addEventListener("click",clickImportant);
    
    let textTitulo = document.getElementById("titulo").value;
    let textContenido = document.getElementById("contenido").value;

    h3.innerText = textTitulo;
    p.innerText = textContenido;

    icono2.classList.add("fa","fa-close");
    
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(icono2);
  
    document.getElementById("blog_seccion").appendChild(article);
   
    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";
}

function deleteParent(element){
    let parent = element.parentElement;
    let text = parent.innerText;
    if(confirm("¿Deseas borrar este elemento? \n" + text)){

        parent.remove();

    }

}










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