let boton = document.getElementById("guardar");
        boton.addEventListener("click",guardarElemento);

        function guardarElemento(){
            let text = document.getElementById("input").value.trim();
            let textToCheck = text.replace(/\s/g, "");
            
            if(textToCheck.length  < 2){
                return;
            }
            if(alreadyExists(text)){
                return;
            }

            let li = document.createElement("li");
            let icono = document.createElement("i");//crear icono
            icono.classList.add("fa","fa-close");//añadir clases
            li.innerText = text;
            li.appendChild(icono);//meterlo en li
            li.addEventListener("click",clickImportant)

            document.getElementById("lista").appendChild(li);
            document.getElementById("input").value = "";
        }
        function clickImportant(event) {
            let element = event.target;
            if(element.classList.contains("fa-close")){
                deleteParent(element);
                return;
            }
            toggleImportant(event.target);//para cambiar la clase
        }

        function toggleImportant(element){
            element.classList.toggle("important")

        }
        function deleteParent(element){
            let parent = element.parentElement;
            let text = parent.innerText;
            if(confirm("¿Deseas borrar este elemento? \n" + text)){

                parent.remove();

            }
            
        }

        function alreadyExists(text){
            let list = document.getElementById("lista");
            let elementosLista = lista.getElementsByTagName("li");
            for(let i = 0; i< elementosLista.length;i++) {
                if(text === elementosLista[i].innerText) {
                    return true;
                }
            }
            return false;
        }