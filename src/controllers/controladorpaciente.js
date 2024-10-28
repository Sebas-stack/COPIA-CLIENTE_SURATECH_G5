//OBJETIVO: Capturar los datos de un formulario

//1. por cada input, select, textarea del formulario 
//se crea un variable

//2. Por cada variable debo utilizar DOM para
//asociarl el html con js
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