// Variables

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formEnviar = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');

// Event Listeners

eventListeners()

function eventListeners() {
    // Inicio app y deshabilitar boton enviar
    document.addEventListener('DOMContentLoaded', inicioApp);
    // Validaciones
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    // Enviar formulario
    formEnviar.addEventListener('submit', enviarEmail);
    // Boton reset
    btnReset.addEventListener('click' , resetarForm)
}

// Funciones

function inicioApp() {
    // Deshabilitar el envio
    btnEnviar.disabled = true;
}

function validarCampo() {
    // Validar longitud del campo y que no este vacío
    validarLongitud(this);
    // Validar campo email
    if (this.type === 'email') {
        validarEmail(this);
    }
    // Manejar errores
    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }   
}

function enviarEmail(e) {
    // Mostrar spinner al presion Enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    // Crea gif de mensaje enviado
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    // Ocultar spinner y mostrar gif de email enviado
    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        // Borrar gif de emial enviado y resetear formulario
        setTimeout(function() {
            enviado.remove();
            formEnviar.reset();
            inicioApp();
        },5000);
    }, 3000);
    e.preventDefault();
}

function resetarForm(e) {
    formEnviar.reset();
    e.preventDefault();
}

// Validaciones

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