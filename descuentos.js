const calculaBtn = document.querySelector('#calcula');
const precioInput = document.querySelector('#precio');
const descuentoInput = document.querySelector('#descuento');
const resultadoOutput = document.querySelector('#resultado');

calculaBtn.addEventListener('click',calculaDescuento);
function calculaDescuento () {

    const precio = precioInput.value;
    const descuento = descuentoInput.value;

    const descuentoFinal = (precio * (100-descuento)) / 100;
    resultadoOutput.innerHTML = descuentoFinal;
}