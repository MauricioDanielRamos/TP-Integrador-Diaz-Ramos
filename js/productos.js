let alertaMostrada = false;
setTimeout(function(){
    if (!alertaMostrada) {
        Swal.fire({
            title: "No te vayas sin ver nuestras ofertas!!!",
            footer: '<a href="./../pages/productos.html">Ofertas</a>'
        });
        alertaMostrada = true; // Actualizamos la bandera para indicar que la alerta ya se mostró
    }
}, 5000);

/*Funcion para mostrar alerta 10 segundos despues de ingresar a la página*/
let intervalo = 2;
let i = intervalo;
function cuentaRegre(){
    let intervaloInt = setInterval(function() {
        if (i == 0) {
            clearInterval(intervaloInt); // limpio intervalo
            Swal.fire({
                title: "No te olvides de completar el formulario!!!",
                footer: '<a href="./../pages/form.html">Formulario de contacto</a>'
            });
        }else {
            i--;
        }
    }, 1000);
}
cuentaRegre();