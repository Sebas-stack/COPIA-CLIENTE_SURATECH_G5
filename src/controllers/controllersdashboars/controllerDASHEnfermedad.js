import{buscarEnfermedad}from "../../services/serviviosEnfermedad.js"

buscarEnfermedad()
.then (function(respuestaBack) {
    console.log(respuestaBack)


    //2.crear una referencia a una etiqueta html donde vamos a reanderizar
    let fila = document.getElementById("fila")

    // 3. Se recorren los datos para obtenerlo de forma separada 
    respuestaBack.forEach( function(enfermedad){
        console.log(enfermedad)
        // 4. se crean columnas
        let columna=document.createElement("div")
        columna.classList.add("col")

        // 5. Se crean tarjetas 
        let tarjetas = document.createElement("div")
        tarjetas.classList.add("card","p-5","h-100","shadow")

        // 6. Se crea una etiqueta para poner el nombre del paciente 
        let nombre = document.createElement("h5")
        nombre.textContent=enfermedad.nombre

        let sintomas = document.createElement("p");
        sintomas.classList.add("card-text");
        sintomas.textContent = enfermedad.sintomas;

        let clasificacion = document.createElement("p");
        clasificacion.classList.add("card-text");
        clasificacion.textContent = enfermedad.clasificacion;

        
        let grado = document.createElement("p");
        grado.classList.add("card-text");
        grado.textContent = enfermedad.grado;

        let probabilidadvida = document.createElement("p");
        probabilidadvida.classList.add("card-text");
        probabilidadvida.textContent = enfermedad.probabilidadvida;

         // 7. Asignar el color del badge según el campo "grupoIngresos" o el estado
         let estado = document.createElement("span");
         estado.classList.add("badge", "rounded-pill", "text-white");
 
         // Asignamos colores según el valor de "grupoIngresos"
         switch(paciente.grupoIngresos) {
            case "Urgente":
                estado.classList.add("bg-urgente");
                estado.textContent = "Urgente";
                break;
            case "Estable":
                estado.classList.add("bg-estable");
                estado.textContent = "Estable";
                break;
            case "Recuperacion":
                estado.classList.add("bg-recuperacion");
                estado.textContent = "Recuperación";
                break;
            case "En tratamiento":
                estado.classList.add("bg-en-tratamiento");
                estado.textContent = "En tratamiento";
                break;
            default:
                estado.classList.add("bg-secondary");
                estado.textContent = "Desconocido";  // Valor por defecto si no se encuentra un valor conocido
                break;
        }
 

        //paso final (ORDENANDO LAS CARTAS)
        tarjetas.appendChild(nombre)
        tarjetas.appendChild(sintomas)
        tarjetas.appendChild(clasificacion)
        tarjetas.appendChild(grado)
        tarjetas.appendChild(probabilidadvida)
        columna.appendChild(tarjetas)
        fila.appendChild(columna) 
    })

})


