/**
 * Calcular media aritmetica 
 */
function calcularMediaAritmetica(lista){
    
    //let sumaLista1 = 0;

    /* for(let i=0; i < lista.length; i++){
        sumaLista1 +=lista[i];
    } */

    const sumaLista = lista.reduce(function(valorAcumulado = 0, item){
        return valorAcumulado + item;
    });

    let promedioLista = sumaLista / lista.length;

    return promedioLista;
}


/**
 * Calcular la mediana
 */

function calcularMediana(lista){
    
    const mitadLista = parseInt( lista.length /2);
    let mediana = 0;

    //Ordenamos la lista 
    lista.sort((a,b) => a -b);

    console.log(lista);

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

function esPar(numero){
   let esPar =  (numero % 2 === 0) ? true : false;

   return esPar;
}


/**
 * CALCULAR LA MODA
 */
/* const lista1 = [1,2,1,4,2,1,5,7,8,2,1,4,6,1,2,1,9,10]; */

function calcularModa(lista){
    const listaCount = {};

    lista.map(function(item){
        if(listaCount[item]){
            listaCount[item] += 1;
        }else{
            listaCount[item] = 1;
        }
        
    });
    
    const listaArray = Object.entries(listaCount).sort( function(valorAcumulado, item){
        return valorAcumulado[1] - item[1]
    });
    
    const moda = listaArray[listaArray.length -1];

    return moda;
}


