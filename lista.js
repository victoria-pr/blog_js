let boton = document.getElementById("guardar"); //aquí conseguimos el botón con el id "guardar" para poder añadirle el listener justo debajo.
boton.addEventListener("click",guardarElemento); //añadimos el listener al botón y entre()la función que le aplicaremos (cuando creemos la función, venimos y la ponemos entre los paréntesis)

function guardarElemento(){//en este caso no necesitamos pasarle ningún argumento a esta función. No tenemos que saber dónde se ha hecho click ni nada, sólo saber QUE SE HA HECHO click y ya
    let text = document.getElementById("input").value.trim();/*nos devuelve el valor que hemos escrito en el <input>. El .trim() limpia los espacios de antes y después así que es lo que hace
    que si metemos "dia" o " dia" o "dia ", solo coja "dia"*/
    let textToCheck = text.replace(/\s/g, ""); /*creamos esta variable para aplicarle la función replace al texto que cogemos de input. Con REPLACE le estamos 
    diciendo que cuando alguien ponga más de un espacio, tabulador, enter...lo concierta en un solo espacio ""*/

    if(textToCheck.length < 2){
        return; //si la palabra tiene menos de 3 letras, la función se termina aquí y lo de abajo no se ejecuta
    }

    if(alreadyExists(text)){
        return; //estamos llamando a la función que hemos creado en la línea 57
    }

    let li = document.createElement("li") //1lista-creamos el elemento de la lista donde meteremos los valores q sacamos del input
    let iconoBorrar = document.createElement("i"); //1icon-creamos el elemento "i" = icono
    iconoBorrar.classList.add("fa", "fa-trash-o"); //2icon-le damos las clases del icono que queremos que aparezca
    li.innerText = text; //2lista-indicamos que el valor del "li" será un texto que extraeremos del text-la variable de la linea 5-
    li.appendChild(iconoBorrar); //3icon-metemos el icono en el li
    li.addEventListener("click",clickImportant); /*cada vez q se crea un nuevo elemento de la lista, le estamos pasando la función clickImportant para que podamos
    resaltar lo importante al hacer click. Para ello ponemos el listener aquí. Es importante tener en cuenta que antes tendremos que haber creado las funciones toggleImportante y clickImportant*/

    document.getElementById("lista").appendChild(li); //3-lista-estamos diciendo que li va a ser un hijo de <ul id="lista"> como lo tenemos en el html
    document.getElementById("input").value = ""; //directamente le estamos dando el valor "" al input
} 

function clickImportant(event){
    let element = event.target;//¿?
    if(element.classList.contains("fa-trash-o")){ //si el elemento(iconoBorrar en este caso) contiene la clase "fa-trash-o" se ejecuta la función deleteParent
    deleteParent(element);
    return;
    }
    toggleImportant(event.target);
}

function toggleImportant(element) { //element porque le pasamos un elemento (h1,p,li...lo que sea. Pero un elemento de html )
    element.classList.toggle("important");/*pasamos un elemento. Si tenía la class="important", la quita. Y si no la tenía, se la añade. -En este caso, en CSS debemos asegurarnos de darle un 
    estilo a la clase important, como por ejemplo cambiar el color del fondo. Así cada vez q demos click tendra color de fondo y si volvemos a dar click, se lo quita
    aquí sería:
    element = li
    classlist = important
    toggle = pon y quita este estilo*/
}  

function deleteParent(element){
    let parent = element.parentElement; //el elemento será el icono y el parent=li
    let text = parent.innerText; //de aquí estamos cogiendo el texto para poder meterlo en el 'confirm' justo en la linea de abajo(46)
    if(confirm("¿deseas borrar este elemento? \n" + text)){ /*el confirm es parecido al alert pero simplemente te da las opciones 'aceptar' y 'cancerlar'
    ponemos el \n para que el texto aparexca en la linea de abajo. parecido al br*/
        parent.remove(); //si le damos a la basura, borramos el li
    }
}

function alreadyExists(text){
    let lista = document.getElementById("lista"); //cogemos el elemento <ul class="lista"> 
    let elementosLista = lista.getElementsByTagName("li"); //buscamos todos los li en la "lista"
    for (let i = 0; i < elementosLista.length; i++){//vamos recorriendo cada elemento 
        if(text === elementosLista[i].innerText){ //y lo comparamos al texto que hemos pasado en la función (linea 52 'text')
            return true;
        }   
    }
    return false;
}