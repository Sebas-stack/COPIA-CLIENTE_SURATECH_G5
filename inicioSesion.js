// Función para mostrar el formulario de registro
function showRegisterForm() {
    document.getElementById('register-form').style.display = 'block';  // Mostrar registro
    document.getElementById('login-form').style.display = 'none';      // Ocultar login
}

// Función para cambiar al formulario de login
function switchToLogin() {
    document.getElementById('register-form').style.display = 'none';   // Ocultar registro
    document.getElementById('login-form').style.display = 'block';     // Mostrar login
}

// Función para cambiar al formulario de registro desde el login
function switchToRegister() {
    document.getElementById('login-form').style.display = 'none';      // Ocultar login
    document.getElementById('register-form').style.display = 'block';  // Mostrar registro
}

// Función para validar y enviar el formulario de registro
function submitRegistration() {
    // Obtener los valores de los campos del formulario de registro
    const nombre = document.getElementById('nombre').value;
    const identificacion = document.getElementById('identificacion').value;
    const edad = document.getElementById('edad').value;
    const ips = document.getElementById('ips').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validar que todos los campos obligatorios estén completos
    if (!nombre || !identificacion || !edad || !ips || !password || !confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Campos Obligatorios',
            text: 'Por favor, completa todos los campos del formulario.',
        });
        return;
    }

    // Validar que la contraseña y la confirmación coincidan
    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseñas no coinciden',
            text: 'La contraseña y la confirmación de contraseña no coinciden.',
        });
        return;
    }

    // Guardar el nombre y la contraseña en localStorage (simulación para poder usarlo en login)
    localStorage.setItem('username', nombre); // Almacena el nombre del usuario
    localStorage.setItem('userPassword', password); // Almacena la contraseña registrada

    // Si la validación es exitosa, se muestra un mensaje de éxito y se cambia a login
    Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: 'Ahora puedes iniciar sesión, ya eres parte de esta gran familia.',
    });

    // Cambiar a la vista de inicio de sesión
    switchToLogin();
}

// Función para realizar el inicio de sesión
function login() {
    // Obtener los valores de los campos de inicio de sesión
    const username = document.getElementById('username').value;
    const loginPassword = document.getElementById('login-password').value;

    // Validar que ambos campos estén llenos
    if (!username || !loginPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor, ingresa tu nombre de usuario y contraseña.',
        });
        return false;
    }

    // Recuperar el nombre de usuario y la contraseña guardados durante el registro
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('userPassword');

//     // Validar que el nombre de usuario ingresado coincida con el almacenado
    if (username !== storedUsername) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre de usuario incorrecto',
            text: 'El nombre de usuario ingresado no es correcto.',
        });
        return false;
    }

    // Validar que la contraseña del inicio de sesión coincida con la registrada
    if (loginPassword !== storedPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'La contraseña que ingresaste no es correcta.',
        });
        return false;
    }

    // Si el inicio de sesión es exitoso
    document.getElementById('login-form').style.display = 'none'; // Ocultar formulario de login
    document.getElementById('register-form').style.display = 'none'; // Ocultar formulario de registro
    // document.getElementById('#Testimonios').style.display = 'block'; // Mostrar testimonios
    document.querySelector('.form-section').style.display = 'none'; // Ocultar la sección de formularios
    document.querySelector('#header-section').style.display = 'block'; // Mostrar navbar
    // Mostrar el navbar, el footer, y otras secciones principales
    document.querySelector('#footer').style.display = 'block'; // Mostrar footer
    document.querySelector('.banner').style.display = 'block'; // Mostrar banner
    document.querySelector('#header-section').style.display = 'block'; // Mostrar navbar
    // Mostrar un mensaje de bienvenida
    Swal.fire({
        icon: 'success',
        title: 'Bienvenido!',
        text: 'Has iniciado sesión correctamente.',
    });

    // Prevenir el comportamiento predeterminado del formulario
    return false;
}
