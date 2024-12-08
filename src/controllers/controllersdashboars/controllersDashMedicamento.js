import{buscarMedicamento}from "../../services/serviciosMedicamento.js"

buscarMedicamento()
.then(function (respuestaBack) {
    console.log(respuestaBack)

        //2.crear una referencia a una etiqueta html donde vamos a reanderizar
    let fila = document.getElementById("fila")

    // 3. Se recorren los datos para obtenerlo de forma separada 
    respuestaBack.forEach( function(medicamento){
        console.log(medicamento)
        // 4. se crean columnas
        let columna=document.createElement("div")
        columna.classList.add("col")

        // 5. Se crean tarjetas 
        let tarjetas = document.createElement("div")
        tarjetas.classList.add("card","p-5","h-100","shadow")

        // 6. Se crea una etiqueta para poner el nombre del paciente 
        let nombre = document.createElement("h5")
        nombre.textContent=medicamento.nombre

        let presentacion = document.createElement("p")
        presentacion.textContent=medicamento.presentacion

        let dosis = document.createElement("p")
        dosis.textContent=medicamento.dosis

        let laboratorio = document.createElement("p")
        laboratorio.textContent=medicamento.laboratorio

        let fechaDeCaducidad = document.createElement("p")
        fechaDeCaducidad.textContent=medicamento.fechaDeCaducidad

        let contraIndecaciones = document.createElement("p")
        dosis.textContent=medicamento.contraIndecaciones

        let tienecopago = document.createElement("p")
        tienecopago.textContent=medicamento.tienecopago

        let registro = document.createElement("p")
        registro.textContent=medicamento.registro

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
        tarjetas.appendChild(presentacion)
        tarjetas.appendChild(dosis)
        tarjetas.appendChild(laboratorio)
        tarjetas.appendChild(fechaDeCaducidad)
        tarjetas.appendChild(contraIndecaciones)
        tarjetas.appendChild(tienecopago)
        tarjetas.appendChild(registro)
        columna.appendChild(tarjetas)
        fila.appendChild(columna) 
    })
})

