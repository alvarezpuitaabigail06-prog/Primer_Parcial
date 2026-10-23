
const formulario = document.getElementById("formulario");

formulario.onsubmit = function(e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if (usuario == "" || clave == "") {
        document.getElementById("mensaje").textContent = "Completa los campos";
    } else {
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("clave", clave);
        document.getElementById("mensaje").textContent = "Datos guardados";
    }
};

function mostrar() {
    let usuario = localStorage.getItem("usuario");
    let clave = localStorage.getItem("clave");

    if (usuario == null) {
        document.getElementById("datos").textContent = "No hay datos guardados";
    } else {
        document.getElementById("datos").textContent =
            "Usuario: " + usuario + " | Contraseña: " + clave;
    }
}

function borrar() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("clave");

    document.getElementById("datos").textContent = "";
    document.getElementById("mensaje").textContent = "Datos borrados";
}
