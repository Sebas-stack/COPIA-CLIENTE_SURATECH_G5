import{ buscarSignoVital }from "../../services/servicioSignoVital.js"
//Objetivo: Recibir datos del BACK y hacerles render (render=pintarlos)
// PASO 1 -> Quemar o similar los datos 

buscarSignoVital()
.then(function (respuestaBack) {
    console.log(respuestaBack)

        //2.crear una referencia a una etiqueta html donde vamos a reanderizar
    let fila = document.getElementById("fila")

    // 3. Se recorren los datos para obtenerlo de forma separada 
    respuestaBack.forEach( function(signoVital){
        console.log(signoVital)
        // 4. se crean columnas
        let columna=document.createElement("div")
        columna.classList.add("col")

        // 5. Se crean tarjetas 
        let tarjetas = document.createElement("div")
        tarjetas.classList.add("card","p-5","h-100","shadow")

        // 6. Se crea una etiqueta para poner el nombre del paciente 
        let nombre = document.createElement("h2")
        nombre.textContent=signoVital.nombre

        let valores = document.createElement("h2")
        valores.textContent=signoVital.valores

        let fechaMedida = document.createElement("h2")
        fechaMedida.textContent=signoVital.fechaMedida


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
        tarjetas.appendChild(valores)
        tarjetas.appendChild(fechaMedida)
        columna.appendChild(tarjetas)
        fila.appendChild(columna) 
    })
})


