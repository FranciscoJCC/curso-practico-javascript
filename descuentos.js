/* const precio = 100;
const descuento = 15;
const porcentagePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentagePrecioConDescuento) / 100;

console.log(precioConDescuento); */

function calcularPrecioConDescuento(precio,descuento){

    const porcentagePrecioConDescuento = 100 - descuento;

    let precioConDescuento = (precio * porcentagePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calcularDescuento(){

    let precio = document.getElementById("precio").value;
    let descuento = document.getElementById("porcentaje").value;

    let total = calcularPrecioConDescuento(precio,descuento);

    document.getElementById("priceResult").innerText = "El precio con descuento es: " + total;

}