

const salarios = colombia.map(function(salario){
    return salario.salary;
});

//Ordenamos los salarios
const salariosColSorted = salarios.sort(function(a,b){
    return a - b;
});


function esPar(numero){
    return (numero % 2 === 0);
}

function medianaSalariosCol(lista){
    
    const mitadLista = parseInt( lista.length /2);
    let mediana = 0;

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista -1];
    
        let promedio = calcularMediaAritmetica([elemento1,elemento2]);
    
        mediana = promedio;
    }else{
        mediana = lista[mitadLista];
    }

    return mediana;
}

function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(function(valorAcumulado = 0, item){
        return valorAcumulado + item;
    });

    let promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Mediana del top 10
const medianaGeneralCol = medianaSalariosCol(salariosColSorted);
const spliceStart = (salariosColSorted.length * (100 -10) / 100);
const spliceEnd = (salariosColSorted.length - spliceStart);

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceEnd);
const medianaTop10 = medianaSalariosCol(salariosColTop10);

console.log(medianaSalariosCol(salariosColSorted));
console.log(medianaTop10);