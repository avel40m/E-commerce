const email = document.querySelector("[data-email]");
const clave = document.querySelector("[data-clave]");
const login = document.querySelector("[data-login]");
const spanErrorEmail = document.querySelector("[data-errorEmail]");
const spanErrorClave = document.querySelector("[data-errorClave]");

login.addEventListener('click', (e) => {
    e.preventDefault();
    if (controlarEmail(email) && controlarClave(clave)) {
        window.location.href = "todosProductos.html";
    } else {
        alert("Error al ingresar");
    }

});

function controlarEmail(email) {
    const texto = email.value;
    const caracteres = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (texto.length == 0 || texto == null) {
        email.style.border = "2px red solid";
        spanErrorEmail.textContent = "El campo email no debe ser nulo o vacio";
        return false;
    }

    if (caracteres.test(texto)) {
        email.style.border = "2px green solid";
        spanErrorEmail.textContent = "";
        return true;
    }else{
        email.style.border = "2px red solid";
        spanErrorEmail.textContent = "El email debe tener un @ y un punto (.)";
        return false;
    }
}

function controlarClave(clave){
    if (clave.value.length == 0 || clave.value == null ) {
        clave.style.border =  "2px red solid";
        spanErrorClave.textContent = "La clave no debe ser nulo o vacio";
        return false;
    } else {
        clave.style.border = "2px green solid";
        spanErrorClave.textContent = "";
        return true;
    }
}