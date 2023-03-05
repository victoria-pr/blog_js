let form = document.getElementById("blog_form");
form.addEventListener("submit",createPost);

function createPost(event){
    event.preventDefault();
    let titulo = document.getElementById("titulo").value //extraemos los valores de id="titulo" e indicamos que eso será el titulo del post
    let contenido = document.getElementById("contenido").value //extraemos los valores de id="contenido" e indicamos que eso será el contenido del post

    let article = document.createElement("article"); //creamos un articulo -donde metremos el h3 y el p
    let h3 = document.createElement("h3"); //creamos un h3 para el titulo
    let p = document.createElement("p"); //creamos un p para el contenido del post

    h3.innerText = titulo; //indicamos que los valores extraido en la linea 6 se los aplicamos al h3 que acabamos de crear en la linea 9
    p.innerText = contenido; //indicamos que los valores extraido en la linea 7 se los aplicamos al p que acabamos de crear en la linea 10

    article.appendChild(h3); //línea 16 y 17: indicamos que tanto h3 como p son hijos del article que hemos creado en la linea 9
    article.appendChild(p);

    document.getElementById("blog_seccion").appendChild(article); //indicamos que el article que se crea con h3 y p, es un hijo de la section ya creada en el html con el id "blog_seccion"
}












/* let form = document.getElementById("blog_form");
        form.addEventListener("submit",createPost);

function createPost(event){
    event.preventDefault();

    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let article = document.createElement("article");
    let iconoBorrar = document.createElement("i");
    let iconoEditar = document.createElement("i");
    iconoBorrar.addEventListener("click",deletePost);
    iconoEditar.addEventListener("click",updatePost);
    
    let textTitulo = document.getElementById("titulo").value;
    let textContenido = document.getElementById("contenido").value;

    h3.innerText = textTitulo;
    p.innerText = textContenido;

    iconoBorrar.classList.add("fa","fa-trash");
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

function crearIconoEditar(){
    let iconoEditar = document.createElement("i");
    iconoEditar.classList.add("fa","fa-pencil");
    iconoEditar.addEventListener("click",updatePost);
    return iconoEditar;
}

function crearIcono(simnolo,callback){
    let icono = document.createElement("i");
    icono.classList.add("fa",simbolo);
    icono.addEventListener("click",callback);
    return icono;
}

function cancelEdit(event,textoTitulo,textoParrafo){
    let element = event.target;
    let parent = element.parentElement;
    let titulo = document.createElement("h3");
    let parrafo = document.createElement("p");
    titulo.innerText = textoTitulo;
    parrafo.innerText = textoParrafo;
    parent.appendChild(titulo);
    parent.appendChild(parrafo);
    parent.getElementsByTagName("input")[0].remove();
    parent.getElementsByTagName("textArea")[0].remove();
    let iconoEditar = crearIcono("fa-pencil", updatePost);
    parent.appendChild(iconoEditar);
    element.remove();   

}

function updatePost(event){
    let element = event.target;
    let parent = element.parentElement;
    let titulo = parent.getElementsByTagName("h3")[0].innerText;
    let texto = parent.getElementsByTagName("p")[0].innerText;
    let inputTitulo = document.createElement("input");
    let textArea = document.createElement("textArea");
    let br = document.createElement("br");


    let iconoCancelar = document.createElement("i");
    iconoCancelar.classList.add("fa","fa-close");

    element.remove();
    inputTitulo.setAttribute("type","text");
    inputTitulo.value = titulo;
    textArea.value = texto;
    parent.appendChild(inputTitulo);
    parent.appendChild(br);
    parent.appendChild(textArea);
    parent.appendChild(iconoCancelar);

    iconoCancelar.addEventListener("click",function(event){
        cancelEdit(event,titulo,texto)

    }
    );
    parent.getElementsByTagName("h3")[0].remove();
    parent.getElementsByTagName("p")[0].remove();
} */