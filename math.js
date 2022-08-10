const ladoCuadrado = 5;
const perimetroCuadro = ladoCuadrado*4;

const areaCuadrado = ladoCuadrado*ladoCuadrado;

console.log({ladoCuadrado,perimetroCuadro,areaCuadrado});

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (alturaTriangulo*ladoTrianguloBase) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});


function calcularTriangulo(lado1, lado2, base, altura) {
    return{
        perimetro: (lado1+lado2+base),
        area: (base*altura)/2,
    }
}

function calcularCuadrado(lado) {
    return{
        perimetro: (lado*4),
        area: (lado*lado),
    }
}

console.group('Circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo*2;
const PI = 3.141516;

const circurferencia = diametroCirculo*PI;
const areaCirculo = PI*(radioCirculo**2);

console.log({
    circurferencia,
    areaCirculo,
})

function calculoCirculo(radio) {
    const diametro = radio * 2;

    return {
        circurferencia: diametro * PI,
        area: Math.PI*Math.pow(radio,2),
    }
}

console.groupEnd('Circle')