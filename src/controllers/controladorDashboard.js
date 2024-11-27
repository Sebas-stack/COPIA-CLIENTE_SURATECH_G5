import {buscarPacientes} from "../services/serviciosPaciente.js"

//OBJETIVO:Recibir datos del BACK y hacerles render (render=PINTARLOS)
//1. Llamar al api
buscarPacientes()
.then(function(respuestaBack){
    console.log(respuestaBack)
    //2. crear una referencia a una etiqueta html donde vamos a renderizar
let fila=document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada
respuestaBack.forEach(function(paciente){
    console.log(paciente)
    //4 Se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5 Se crean tarjetas
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")

    //6 Se crea una etiqueta para poner el nombre
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombre

    //PASO FINAL (ORDENANDO LAS CARTAS)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    })
})

