import{buscarMedico}from "../../services/serviciosMedico.js"

//Objetivo: Recibir datos del BACK y hacerles render (render=pintarlos)
// PASO 1 -> Quemar o similar los datos 

buscarMedico()
.then(function (respuestaBack) {
    console.log(respuestaBack)

        //2.crear una referencia a una etiqueta html donde vamos a reanderizar
    let fila = document.getElementById("fila")

    // 3. Se recorren los datos para obtenerlo de forma separada 
    respuestaBack.forEach( function(medico){
        console.log(medico)
        // 4. se crean columnas
        let columna=document.createElement("div")
        columna.classList.add("col")

        // 5. Se crean tarjetas 
        let tarjetas = document.createElement("div")
        tarjetas.classList.add("card","p-5","h-100","shadow")

        // 6. Se crea una etiqueta para poner el nombre del paciente 
        let nombre = document.createElement("h5")
        nombre.textContent=medico.nombre

        let especialidad = document.createElement("p")
        especialidad.textContent=medico.especialidad

        let salario = document.createElement("p")
        salario.textContent=medico.salario

        let ips = document.createElement("p")
        ips.textContent=medico.ips

        let correo = document.createElement("p")
        correo.textContent=medico.correo

        let telefono = document.createElement("p")
        telefono.textContent=medico.telefono

        let direccion = document.createElement("p")
        direccion.textContent=medico.direccion

        let disponibleFinDeSemana = document.createElement("p")
        disponibleFinDeSemana.textContent=medico.disponibleFinDeSemana

        
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
        tarjetas.appendChild(especialidad)
        tarjetas.appendChild(salario)
        tarjetas.appendChild(ips)
        tarjetas.appendChild(correo)
        tarjetas.appendChild(telefono)
        tarjetas.appendChild(direccion)
        tarjetas.appendChild(disponibleFinDeSemana)
        columna.appendChild(tarjetas)
        fila.appendChild(columna) 
    })
})


