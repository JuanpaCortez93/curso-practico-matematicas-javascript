const calculaBtn = document.querySelector('#calcula');
const precioInput = document.querySelector('#precio');
//const descuentosInput = document.getElementsByName('descuento');
const resultadoOutput = document.querySelector('#resultado');
const cupon = document.querySelector('#cupon');

//const arrayDescuento = undefined; //cupones

/*
const cuponesObj = {
    'Juanpa10': 10,
    'Juanpa20': 20,
    'Juanpa30': 30
}
*/

const listaCupones = [];
listaCupones.push({
    name: 'Juanpa10',
    descuento: 10,
    limite: 500,
});

listaCupones.push({
    name: 'Juanpa20',
    descuento: 20,
    limite: 1000,
})


calculaBtn.addEventListener('click',calculaDescuento);
function calculaDescuento () {

    const precio = precioInput.value;
    const cuponText = cupon.value;

    const couponInArray = listaCupones.find(funcionCupones);
    function funcionCupones (cuponesElementos) {    
        return cuponesElementos.name == cuponText;        
    }

    if(couponInArray){
        const descuento = couponInArray.descuento;
        const descuentoFinal = (precio * (100-descuento)) / 100;
        resultadoOutput.innerHTML = descuentoFinal;
    }else{
        resultadoOutput.innerText = "Cupon no válido";
    }


    /*
    const couponInArray = listaCupones.filter(funcionCupones);
    function funcionCupones (cuponesElementos) {
        if(cuponesElementos.name == cuponText){
            const descuentoFinal = (precio * (100-cuponesElementos.descuento)) / 100;
            resultadoOutput.innerHTML = descuentoFinal;
        }
    }
    */
    /*


    if(cuponesObj[cuponText]){
        const descuento = cuponesObj[cuponText];
        const descuentoFinal = (precio * (100-descuento)) / 100;
        resultadoOutput.innerHTML = descuentoFinal;
    }else{
        resultadoOutput.innerHTML = "No existe ese cupon";
    }
    */

    /*
    for(var descuento of descuentosInput){
        if(descuento.checked){
            const precio = precioInput.value;
            const descuentoFinal = (precio * (100-(descuento.value*10))) / 100;
            resultadoOutput.innerHTML = descuentoFinal;
        }
    }
    */
    /*
    const precio = precioInput.value;
    cuponText = cupon.value;

    if(precio!='' && cuponText!=''){
        
        if(cuponText == 'JUANPA10'){
            var descuento = 10;
        }else if(cuponText == 'JUANPA20'){
            var descuento = 20;
        }else{
            var descuento = 0;
            alert('No existe descuento');
        }

        const descuentoFinal = (precio * (100-(descuento))) / 100;
        resultadoOutput.innerHTML = descuentoFinal;

    }else if (precio!='' && cuponText==''){
        const descuentoFinal = (precio);
        resultadoOutput.innerHTML = descuentoFinal;
    }
    */
    
    
}