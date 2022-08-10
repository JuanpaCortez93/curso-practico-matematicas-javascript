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

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

