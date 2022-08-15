function encontrarPersona(nombrePersona) {
    return salarios.find(persona => persona.name == nombrePersona)
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map(function(elemento){
        return elemento.salario;
    });
    
    const medianaSalarios = JuanpaMath.calcularMediana(salarios);
    return medianaSalarios;

}

function proyeccionSalario(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    let porcentajesCrecimiento = [];

    for(let i=1; i<trabajos.length; i++){
        const salarioPasado = trabajos[i-1].salario;
        const salarioActual = trabajos[i].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento/salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = JuanpaMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length-1].salario;
    const aumentoNuevoSalario = ultimoSalario*medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoNuevoSalario;

    return nuevoSalario;
}

//Análisis empresarial

const empresas = {};

for(persona of salarios){
    for (trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year]=[];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

function medianaEmpresariaYear(nombre, year){
    if(!empresas[nombre]){
        console.warn('La empresa no existe');
        return;
    }else if(!empresas[nombre][year]){
        console.warn('La empresa no tiene salarios este año');
        return;
    }else{
        return JuanpaMath.calcularMediana((empresas[nombre][year]))
    }
}

function proyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn('La empresa no existe');
    }else{
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresariaYear(nombre,year);
        });

        let porcentajesCrecimiento = [];

        for(let i=1; i<listaMedianaYears.length; i++){
            const salarioPasado = listaMedianaYears[i-1];
            const salarioActual = listaMedianaYears[i];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento/salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaPorcentajesCrecimiento = JuanpaMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length-1];
        const aumentoMedianaSalario = ultimaMediana*medianaPorcentajesCrecimiento;
        const nuevoSalario = ultimaMediana + aumentoMedianaSalario;

        return nuevoSalario;
        
    }
}

//Análisis general

function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const mediana = JuanpaMath.calcularMediana(listaMedianas);
    return mediana;

}

function medianaTop10(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrdenadas = JuanpaMath.ordenarLista(listaMedianas);   
    const cantidad = listaMedianas.length/10;
    const limite = listaMedianas.length-cantidad;

    const top10 = medianasOrdenadas.slice(limite,medianasOrdenadas.length);
    const medianaTop10 = JuanpaMath.calcularMediana(top10);

    return medianaTop10;
}