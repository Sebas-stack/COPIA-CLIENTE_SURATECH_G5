import {buscarPacientes} from "../services/serviciosPaciente.js"

//OBJETIVO: Capturar los datos de un formulario

//1. por cada input, select, textarea del formulario 
//se crea un variable

//2. Por cada variable debo utilizar DOM para
//asociarl el html con js
/*
let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let fechaNacimientoPaciente=document.getElementById("nacimientopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")
let polizaPaciente=document.getElementById("polizapaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoIngresoPaciente=document.getElementById("ingresospaciente")
let fechaAfiliacionPaciente=document.getElementById("afiliacionpaciente")

//3. Crear una variable para asociarla al id del boton que tengo en html
let botonRegistroPaciente=document.getElementById("botonregistropaciente")

//4. Detectamos acciones o eventos en el boton
botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault()

    //5. Se crea un JSON
    //que capture todos los datos 
    //del formulario
    let datosFormularioPaciente={
        nombres:nombrePaciente.value,
        fechaNacimiento: fechaNacimientoPaciente.value,
        ciudad:ciudadPaciente.value,
        correo: correoPaciente.value,
        telefono: telefonoPaciente.value,
        ips: ipsPaciente.value,
        grupoIngresos: grupoIngresoPaciente.value,
        tienePoliza: polizaPaciente.value,
        fechaAfiliacion: fechaAfiliacionPaciente.value
        
    }

    //6. se envian los datos al back
    console.log(datosFormularioPaciente)

    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
    });
})


*/
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




