        // Buscador
        document.getElementById("search-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const query = document.getElementById("search-input").value.toLowerCase();
            const textContent = document.body.innerText.toLowerCase();
            if (textContent.includes(query)) {
                alert("Búsqueda encontrada");
            } else {
                alert("No se encontraron resultados.");
            }
        });

        // // Manejo del formulario
        // document.getElementById('registro-form').addEventListener('submit', function(event) {
        //     event.preventDefault();

        //     // Mostrar el mensaje de éxito
        //     Swal.fire({
        //         icon: 'success',
        //         title: '¡Registro exitoso!',
        //         text: 'Tu registro se ha realizado correctamente.',
        //         confirmButtonText: 'Aceptar'
        //     });

        //     // Limpiar el formulario
        //     event.target.reset();
        // });
              // Código JS para el manejo del login
        // document.getElementById('login-form').addEventListener('submit', function(event) {
        //     event.preventDefault(); // Evita el envío del formulario para hacer la validación manual.
        //     const email = document.getElementById('login-email').value;
        //     const password = document.getElementById('login-password').value;

        //     if (email && password) {
        //         Swal.fire('¡Éxito!', 'Has iniciado sesión correctamente.', 'success');
        //     } else {
        //         Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
        //     }
        // });

        // // Mostrar formulario de cita al hacer clic en el botón
        // document.getElementById('agendar-cita-btn').addEventListener('click', function() {
        //     document.getElementById('cita-section').style.display = 'block'
        // });

        // // Validar y manejar el formulario de cita
        // document.getElementById('cita-form').addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     let nombre = document.getElementById('nombrePaciente').value;
        //     let fecha = document.getElementById('fechaCita').value;
        //     let hora = document.getElementById('horaCita').value;
        //     let motivo = document.getElementById('motivoCita').value;

        //     // Mostrar confirmación
        //     Swal.fire({
        //         title: 'Cita Agendada',
        //         text: `Nombre: ${nombre}\nFecha: ${fecha}\nHora: ${hora}\nMotivo: ${motivo}`,
        //         icon: 'success',
        //         confirmButtonText: 'Cerrar'
        //     });

        //     // Limpiar el formulario
        //     document.getElementById('cita-form').reset();
        // });
    