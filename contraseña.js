

        // Lógica para el registro
        // document.getElementById("registro-form").addEventListener("submit", function(event) {
        //     event.preventDefault();

        //     // Obtener los valores del formulario
        //     const correo = document.getElementById("correo").value;
        //     const password = document.getElementById("password").value;

        //     // Validar que las contraseñas coincidan
        //     if (password !== document.getElementById("confirm-password").value) {
        //         Swal.fire("Error", "Las contraseñas no coinciden", "error");
        //         return;
        //     }

        //     // Guardar en localStorage
        //     localStorage.setItem("userEmail", correo);
        //     localStorage.setItem("userPassword", password);

        //     // Ocultar el formulario de registro y mostrar el contenido de la página
        //     document.querySelector(".form-section").style.display = "none";
        //     document.querySelectorAll(".content-section").forEach(section => {
        //         section.style.display = "block";
        //     });

        //     // Mostrar mensaje de éxito
        //     Swal.fire("¡Registro exitoso!", "Bienvenido a SURATECH", "success");
        // });



           // Script para manejar los formularios de cita y registro
        
        // Función para manejar la confirmación de cita
        document.getElementById('cita-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir el envío del formulario
            const nombrePaciente = document.getElementById('nombrePaciente').value;
            const fechaCita = document.getElementById('fechaCita').value;
            const horaCita = document.getElementById('horaCita').value;
            const motivoCita = document.getElementById('motivoCita').value;
        
            // Validación de campos vacíos
            if (!nombrePaciente || !fechaCita || !horaCita || !motivoCita) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, complete todos los campos.',
                });
                return;
            }
        
            // Validación de fecha (no puede ser una fecha pasada)
            const fechaHoy = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
            if (fechaCita < fechaHoy) {
                Swal.fire({
                    icon: 'error',
                    title: 'Fecha no válida',
                    text: 'La fecha de la cita no puede ser anterior al día de hoy.',
                });
                return;
            }
        
            // Simulación de confirmación de cita
            Swal.fire({
                icon: 'success',
                title: 'Cita Confirmada',
                text: `La cita de ${nombrePaciente} ha sido confirmada para el ${fechaCita} a las ${horaCita}.`,
            }).then(() => {
                // Limpiar los campos del formulario después de la confirmación
                document.getElementById('cita-form').reset();
            });
        });
          // // Establecer la fecha mínima en el campo de fecha para que no se pueda seleccionar una fecha pasada
        document.getElementById('fechaCita').setAttribute('min', new Date().toISOString().split('T')[0]);
        
        // // Función para manejar el registro de usuarios
        // document.getElementById('registro-form').addEventListener('submit', function(event) {
        //     event.preventDefault(); // Prevenir el envío del formulario
        //     const nombre = document.getElementById('nombre').value;
        //     const identificacion = document.getElementById('identificacion').value;
        //     const edad = document.getElementById('edad').value;
        //     const ips = document.getElementById('ips').value;
        //     const sangre = document.getElementById('sangre').value;
        //     const correo = document.getElementById('correo').value;
        //     const password = document.getElementById('password').value;
        //     const confirmPassword = document.getElementById('confirm-password').value;
        
        //     // Validación de campos vacíos
        //     if (!nombre || !identificacion || !edad || !ips || !sangre || !correo || !password || !confirmPassword) {
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Error',
        //             text: 'Por favor, complete todos los campos.',
        //         });
        //         return;
        //     }
        
        //     // Validación de contraseñas
        //     if (password !== confirmPassword) {
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Contraseñas no coinciden',
        //             text: 'Las contraseñas deben coincidir.',
        //         });
        //         return;
        //     }
        
        //     // Simulación de registro exitoso
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Registro Exitoso',
        //         text: `¡Bienvenido, ${nombre}! Tu registro ha sido completado con éxito.`,
        //     }).then(() => {
        //         // Limpiar los campos del formulario después del registro
        //         document.getElementById('registro-form').reset();
        //     });
        // });
        
        // // Función para manejar el inicio de sesión
        // document.getElementById('login-form').addEventListener('submit', function(event) {
        //     event.preventDefault(); // Prevenir el envío del formulario
        //     const loginEmail = document.getElementById('login-email').value;
        //     const loginPassword = document.getElementById('login-password').value;
        
        //     // Validación de campos vacíos
        //     if (!loginEmail || !loginPassword) {
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Error',
        //             text: 'Por favor, ingresa tu correo y contraseña.',
        //         });
        //         return;
        //     }
        
        //     // Simulación de inicio de sesión exitoso
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Inicio de sesión exitoso',
        //         text: 'Has iniciado sesión correctamente.',
        //     });
        // });
        
        // // Validación de contraseñas para asegurar que coincidan
        // document.getElementById('password').addEventListener('input', function() {
        //     const password = document.getElementById('password').value;
        //     const confirmPassword = document.getElementById('confirm-password').value;
        //     if (password !== confirmPassword) {
        //         document.getElementById('confirm-password').setCustomValidity('Las contraseñas no coinciden');
        //     } else {
        //         document.getElementById('confirm-password').setCustomValidity('');
        //     }
        // });
        
      
        