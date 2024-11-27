//PASOS PARA CONSUMIR API CON JS

export async function buscarPacientes(){
    //1. Se configura la url del servicio 
    //que se desea consumir (PA ONDE VAS MIJO)
    const URL="http://localhost:8080/api/paciente"

    //2. Se configura la peticion del servicio a consumir
    //(A QUE VAS PA ALLA OME)

    let peticion={
        method:"GET"
    }

    //3. CONSUMIR EL API
    //(ARRANQUE PS MIJO)
    let respuestaServidor=await fetch(URL,peticion)
    let pacientes=await respuestaServidor.json()
    return pacientes
}

export async function registrarPaciente(datosPaciente){
    const URL="http://localhost:8080/api/paciente"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosPaciente)
    }
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal
}

