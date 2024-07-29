let arrProductos = ["Yerba Playadito por 1 Kg", "Azucar Ledesma x 1 Kg", "Pan x 1 Kg", "Leche La Serenisima x 1 Lt",
    "Carne picada x 1 Kg", "Fideos mostachol Matarazzo x 500 Gr", "Tomate x Kg", "Lechuga x Kg", "Papa x Kg", 
    "Gaseosa Coca-Cola x 1.5 Lt"];
let arrPrecios=[100.25.toFixed(2),50.48.toFixed(2),60.00.toFixed(2),90.23.toFixed(2),80.78.toFixed(2),
    70.20.toFixed(2),90.60.toFixed(2),40.00.toFixed(2),5.15.toFixed(2),20.00.toFixed(2)]; //ayuda del profe Mauri el .tofixed
let arrStock=[10,5,6,8,7,10,3,4,5,6];



/* FUNCIONA PERO NO VIMOS FLAG*/
let alertaMostrada = false;
setTimeout(function(){
    if (!alertaMostrada) {
        alert("No te olvides de visitar nuestras ofertas !!!!!");
        alertaMostrada = true; // Actualizamos la bandera para indicar que la alerta ya se mostró
    }
}, 35000);
/* Si lo dejo asi, cada 15 segundos se muestra el alerta (re molesto) por eso use el de arriba.
    setTimeout(function(){
        alert(`No te olvides de contactarnos !!!!! `);
        }, 15000);
*/
/*Funcion para mostrar alerta 10 segundos despues de ingresar a la página*/
let intervalo = 10;
let i = intervalo;
function cuentaRegre(){
    let intervaloInt = setInterval(function() {
        if (i == 0) {
            clearInterval(intervaloInt); // limpio intervalo
            alert("No olvides completar el formulario de contacto!!");
        }else {
            i--;
        }
    }, 1000);
}
cuentaRegre();

/*Funcion para llenar lista de productos*/
let items = document.querySelectorAll(".product-item");
function llenarListaProductos(arrProductos, items) {
    for (let i = 0; i < arrProductos.length; i++) {
        items[i].textContent = arrProductos[i];
    }
}
llenarListaProductos(arrProductos, items);

/*Funcion para llenar lista de precios*/
let precios = document.querySelectorAll(".price-item");
function llenarListaPrecios(arrPrecios, precios) {
    for (let i = 0; i < arrPrecios.length; i++) {
        precios[i].textContent = arrPrecios[i];
    }
}
llenarListaPrecios(arrPrecios, precios);

/*Funcion para llenar stock en el atributo "max"*/
let input = document.querySelectorAll("input");
function controlStock(arrStock, input) {
    for (let i = 0; i < arrStock.length; i++) {
        input[i].max = arrStock[i];
    }
}
controlStock(arrStock, input);
//console.log(arrStock);

/*Funcion para comprar, validar stock, sumar y multiplicar items agregados*/
document.querySelector("button").addEventListener("click", () => {
    let cantidades = document.querySelectorAll("input.stock");
    let total = 0;
    for (let i = 0; i < arrStock.length; i++) {
        let cantidad = Number(cantidades[i].value);
        if (cantidad >= 0 && (arrStock[i] - cantidad) >= 0) {   /*Valida que cantidad sea mayor o igual a 0 y TAMBIEN que el máximo de stock menos cantidad sea mayor o igual a 0*/
            arrStock[i] -= cantidad; // Actualiza el stock después de la compra
            total += cantidad * arrPrecios[i]; //Acumula la totalidad de la compra
        } else {
            alert("Ingrese una cantidad mayor a cero o no hay suficiente stock");
        }
    }
    //Agregue una validacion que al no haber compra, el total quede vacio, en vez de mostrarme un 0.
    if(total>0){
        document.getElementById("total").innerText=total.toFixed(2);  //agregue .tofixed para que sea coherente con los arreglos
    }else{
        total="";
    }
    controlStock(arrStock, input); /*Actualiza los valores máximos de los inputs (el stock), si la llamo luego del evento*/
    //console.log(arrStock);
});

/*Muestra y oculta las imagenes que contienen los divs, cada cierto intervalo de tiempo*/
setInterval(() => {
    document.getElementById("div1").classList.toggle("hidden"); /*div1 y div3 comienzan ocultos*/
    document.getElementById("div2").classList.toggle("hidden");
}, 5000);
setInterval(() => {
    document.getElementById("div3").classList.toggle("hidden"); /*div1 y div3 comienzan ocultos*/
    document.getElementById("div4").classList.toggle("hidden");
}, 8000);




/*CODIGO PARA BOTONES DE SUMA Y RESTA DE CADA PRODUCTO- Codigo brindado por Alexis Ullman - Aun no se si lo usare

var botonsuma = document.querySelectorAll("#botonsuma");
botonsuma.forEach(ele=>ele.addEventListener ("click", (e)=>{
    e.target.previousElementSibling.value++;
    let inpCant=e.target.previousElementSibling.value;
    let pPrecio=e.target.nextElementSibling.innerHTML;
    let total =inpCant*pPrecio;
    console.log(pPrecio, inpCant);
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.children[0].value=total;
}));

*/

/*Esto no recuerdo porque lo puse aca*/
/*window.location.href = "index.html" */ 