const JuanpaMath = {}

JuanpaMath.calcularPromedio = function calcularPromedio (lista) {
    //sumar todos los elementos del array

    //let sumaLista = 0;
    //for(let i=0; i<lista.length; i++){
    //    sumaLista = sumaLista + lista[i];
    //}

    //const sumaLista = lista.reduce(sumarElementos);
    //function sumarElementos(valorAcumulado, nuevoValor) {
    //    return valorAcumulado + nuevoValor;
    //}

    const sumaLista = lista.reduce((a,b) => a + b);
    const promedioLista = sumaLista/lista.length;
    return promedioLista;

}

JuanpaMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}

JuanpaMath.esImpar = function esImpar(lista) {
    return lista.length % 2;
}

JuanpaMath.calcularMediana = function calcularMediana (listaDesordenada) {

    lista = JuanpaMath.ordenarLista(listaDesordenada);

    const listaesPar = JuanpaMath.esPar(lista);
    const listaesImpar = JuanpaMath.esImpar(lista);
    
    if(listaesPar){
        const indiceLista = [lista[Math.floor(lista.length/2)-1],lista[Math.floor(lista.length/2)]];
        console.log(lista)
        return JuanpaMath.calcularPromedio(indiceLista);
    }else{
        const indiceLista = Math.floor(lista.length/2);
        return lista[indiceLista];
    }

}

JuanpaMath.ordenarLista = function ordenarLista(listaInput) {
    const lista = listaInput.sort(ordenarListaSort);
    function ordenarListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado - nuevoValor;
    }

    return lista;
}

JuanpaMath.calcularModa = function calcularModa (lista) {

    const listaCount = {};

    for(let i=0; i<lista.length; i++){
        const elemento = lista[i];
        
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    
    }

    const listaArray = Object.entries(listaCount);
    const listaArrayOrdenada = ordenarListaBidimensional(listaArray);
    const elementoModa = listaArrayOrdenada[listaArrayOrdenada.length-1];
    return elementoModa[0];
}

JuanpaMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaInput) {
    const lista = listaInput.sort(ordenarListaSort);
    function ordenarListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }

    return lista;
}

JuanpaMath.mediaGeometrica = function mediaGeometrica(listaInput) {
    var resultado=1;

    for(let i=0;i<listaInput.length;i++){
        resultado = resultado*listaInput[i];
    }

    resultado = Math.pow(resultado,1/listaInput.length);

    return resultado;
}

const notes = [
    {
        course: "Educación Física",
        x: 10,
        w: 2,
    },
    {
        course: "Programación",
        x: 8,
        w: 5,
    },
    {
        course: "Finanzas personales",
        x: 7,
        w: 5,
    },
];

JuanpaMath.mediaPonderada = function mediaPonderada (ArrayInput) {

    
    const numeradorLista = ArrayInput.map(function numeradorListaOpp(elementoPesoObject) {
        return elementoPesoObject.x*elementoPesoObject.w;
    });
    const numeradorListaSuma = numeradorLista.reduce((a,b)=>a+b);

    const denominadorLista = ArrayInput.map(function denominadorListaOpp (elementoObject) {
        return elementoObject.w;
    });
    const denominadorListaSuma = denominadorLista.reduce((a,b)=>a+b);

    const mediaPonderadaResultado = numeradorListaSuma/denominadorListaSuma;

    return mediaPonderadaResultado;

}

console.Gr
