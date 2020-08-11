// Variables

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

// Event Listeners

eventListeners()

function eventListeners() {
    // Inicio app y deshabilitar boton enviar
    document.addEventListener('DOMContentLoaded', inicioApp);
    // Validaciones
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
}

// Funciones

function inicioApp() {
    // Deshabilitar el envio
    btnEnviar.disabled = true;
}

// Validaciones

function validarCampo() {
    // Validar longitud del campo y que no este vacío
    validarLongitud(this);
    // Validar campo email
    if (this.type === 'email') {
        validarEmail(this);
    }
    // Manejar errores
    let errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        btnEnviar.disabled = false;
    }
}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        // borderBottomColor es un clase de materialize
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const email = campo.value;
    if (email.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}