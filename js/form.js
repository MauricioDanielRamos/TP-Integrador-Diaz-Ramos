let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");
let btnEnviar = document.getElementById("send");

let informacion=[]; /*Arreglo que se va completando con la informacion obtenida en el formulario de contacto*/

/*Funcion para obtener la informacion completada en el formulario de contacto*/
btnEnviar.addEventListener("click", (e)=>{
    e.preventDefault();  //event = e
    if (!form.reportValidity()) {   //Sin esto, ninguna validacion funciona.
        return;
    }
    /*
    En este código, form.reportValidity() verifica la validez de todos los campos en el formulario 
    y muestra los mensajes de error del navegador si algún campo no es válido. Si el formulario es válido, 
    entonces se procede con el resto del código para crear y guardar el archivo de texto: --- Ayuda de chatgpt --- 
    */
    informacion[0] = "Nombre: " + nombre.value;
    informacion[1] = "Apellido: " + apellido.value;
    informacion[2] = "Telefono: " + telefono.value;
    informacion[3] = "Email: " + email.value;
    informacion[4] = "Mensaje: " + textarea.value;
    let blob = new Blob ([informacion] , {type: "text/plain;charset-utf-8"});
    saveAs(blob, "contacto.txt");
});