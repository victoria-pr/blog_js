let form = document.getElementById("blog_form");
form.addEventListener("submit",createPostEvent);

function createPostEvent(event){
    event.preventDefault();
    let titulo = document.getElementById("titulo").value.trim(); //extraemos los valores de id="titulo" e indicamos que eso será el titulo del post
    let contenido = document.getElementById("contenido").value.trim(); //extraemos los valores de id="contenido" e indicamos que eso será el contenido del post
    createPost(titulo,contenido);
    document.getElementById("blog_form").reset();
}

function createPost(titulo,contenido){
    let article = document.createElement("article"); //creamos un articulo -donde metremos el h3 y el p
    let h3 = document.createElement("h3"); //creamos un h3 para el titulo
    let p = document.createElement("p"); //creamos un p para el contenido del post
    let iconoEditar = crearIcono("fa-edit",updatePost) //1-EDITAR-CREAR ICONO
    let iconoBorrar = crearIcono("fa-trash",deletePost) //1-ICONOBORRAR-CREAR ICONO
    

    h3.innerText = titulo; //indicamos que los valores extraido en la linea 6 se los aplicamos al h3 que acabamos de crear en la linea 9?
    p.innerText = contenido; //indicamos que los valores extraido en la linea 7 se los aplicamos al p que acabamos de crear en la linea 10?

    article.appendChild(h3); //línea 16 y 17: indicamos que tanto h3 como p son hijos del article que hemos creado en la linea 9?
    article.appendChild(p);
    article.appendChild(iconoEditar); //2-ICONOEDITARR-DECIR QUE ES HIJO DE ARTICLE PARA QUE APAREZCA
    article.appendChild(iconoBorrar); //2-ICONOBORRAR-DECIR QUE ES HIJO DE ARTICLE PARA QUE APAREZCA (sin esta parte, no aparece)

    document.getElementById("blog_seccion").appendChild(article); //indicamos que el article que se crea con h3 y p, es un hijo de la section ya creada en el html con el id "blog_seccion"
}

function savePost(event){
    let element = event.target;
    let parent = element.parentElement;
    let titulo = parent.getElementsByTagName("input")[0].value;
    let contenido = parent.getElementsByTagName("textArea")[0].value;
    let h3 = document.createElement ("h3")
    let p = document.createElement ("p")
    
    h3.innerText = titulo;
    p.innerText = contenido;
    parent.appendChild(h3);
    parent.appendChild(p);

    parent.getElementsByTagName("input")[0].remove();
    parent.getElementsByTagName("textArea")[0].remove();
    element.remove();
    parent.querySelector(".fa-close").remove();
    let iconoEditar = crearIcono("fa-edit",updatePost);
    parent.appendChild(iconoEditar);

    let iconoBorrar = crearIcono("fa-trash",deletePost);
    parent.appendChild(iconoBorrar);

    let breaks = parent.getElementsByTagName("br");
    breaks = [...breaks];
    breaks.forEach(element => {
        element.remove();
    });
}

function crearIcono(simbolo, callback){ //la idea de esta función es crearla para todos los iconos que se vayan a utilizar. Aparte, crear la función que se le va a aplicar y arriba (en createPost) juntar ambos.
    let icono = document.createElement("i");
    icono.classList.add("fa", simbolo);
    icono.addEventListener("click", callback);
    return icono;
}

function deletePost(event){
    let element = event.target; //¿? siempre que es event se pone esto?
    let parent = element.parentElement; //el elemento será el icono y el parent=article
    let text = parent.getElementsByTagName("h3")[0].innerText; // con la parte "getElementsByTagName("h3")[0].innerText;" estamos indicando que a la hora de mostrar el confirm, solo muestre el titulo
    if (confirm("¿Deseas eliminar este post de título? \n" + text)){
        parent.remove(); //si se confirma, se borra el parent, que ya hemos dicho que será el article, donde se incluyen tanto el h3 como el p
    }
}

function cancelEdit(event,textoTitulo,textoParrafo) {
    let element = event.target;
    let parent = element.parentElement;
    let titulo = document.createElement("h3");
    let parrafo = document.createElement("p");
    titulo.innerText = textoTitulo;
    parrafo.innerText = textoParrafo;
    parent.appendChild(titulo);
    parent.appendChild(parrafo);
    parent.getElementsByTagName("input")[0].remove();
    parent.getElementsByTagName("textarea")[0].remove();
    let iconoEditar = crearIcono("fa-edit",updatePost);
    parent.appendChild(iconoEditar);
    element.remove();
    parent.querySelector(".fa-save").remove();
    let iconoBorrar = crearIcono("fa-trash",deletePost);
    parent.appendChild(iconoBorrar);

    let breaks = parent.getElementsByTagName("br");
    breaks = [...breaks];
    breaks.forEach(element => {
        element.remove();
    });
  }


function updatePost(event){
    let element = event.target; //el elemento sería el icono al que hemos hecho click->
    let parent = element.parentElement; //->pero queremos el parent, que en este caso es el ARTICULO
    
    let titulo = parent.getElementsByTagName("h3")[0].innerText; //dentro del articulo, queremos que el parent busque el PRIMER[0] elemento <h3> y nos devuelva ese texto
    let texto = parent.getElementsByTagName("p")[0].innerText; //dentro del articulo, queremos que el parent busque el PRIMER[0] elemento <p> y nos devuelva ese texto
    
    let inputTitulo = document.createElement("input"); //creamos los elementos input y texArea que aparecerán->
    let textArea = document.createElement("textArea"); //->al pulsar "editar"
    let br = document.createElement("br"); //es un poco chapuza, pero metemos este br para poder separar el titulo y el textArea de abajo

    let iconoCancelar = crearIcono("fa-close",function(event){
        cancelEdit(event,titulo,texto);  
    })

    let iconoGuardar = crearIcono("fa-save",savePost);

    inputTitulo.setAttribute("type", "text"); //aunque por defecto al input será 'type = "text' aquí lo especificamos por si acaso
    inputTitulo.value = titulo; //relacionamos que el valor del imput que creamos al darle a editar, título será el titulo q extraemos del h3
    textArea.value = texto; //relacionamos que el valor del textArea que creamos al editar, será el texto que extraemos del p

    parent.appendChild(inputTitulo);
    parent.appendChild(br)
    parent.appendChild(br)
    parent.appendChild(textArea);
    parent.appendChild(iconoCancelar);
    parent.appendChild(iconoGuardar);
    
    //Indicaremos esto para q borre el h3 y p ya creados
    /* parent.getElementsByTagName("h3")[0].remove(); */
    let titulo1 = parent.getElementsByTagName("h3")[0];
    titulo1.remove();
    parent.getElementsByTagName("p")[0].remove(); 
    element.remove(); 
    parent.querySelector(".fa-trash").remove();
}


createPost("Manzana", "tralalalalalalaaaaa");
createPost("Sandía", "tralalalalalalaaaaa");




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