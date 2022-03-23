//CUADRADO
/* const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.group("Cuadrado");
console.log("Los lados del cuadrado miden: " + ladoCuadrado+ ' cm');
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + ' cm');
console.log("El area del cuadrado es: " + areaCuadrado +' cm2');
console.groupEnd(); */

function PerimetroCuadrado(lado){
    return lado * 4;
}


function AreaCuadrado(lado){
    return lado * lado;
}
/* console.group("Cuadrados");
console.log("El perimetro del cuadrado es: " + calcularPerimetroCuadrado(5));
console.log("El area del cuadrado es: " + calcularAreaCuadrado(5));
console.groupEnd(); */



//TRIANGULO
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo  = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2; */

function PermimetroTriangulo(lado1, lado2, base){
    return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}


/* console.group("Triangulo");

console.log("El perimetro del triangulo es: " + calcularPermimetroTriangulo(6,6,4));
console.log("El area del triangulo es: " + areaTriangulo(4,5.5)); */

/* console.log(
    "Los lados del triangulo miden: "+ ladoTriangulo1 + 
    " cm, " + ladoTriangulo2 + 
    " cm " + baseTriangulo + " cm"
);

console.log("La altura del triangulo es: " + alturaTriangulo);
console.log("El perimetro del triangulo es: " + perimetroTriangulo + ' cm');
console.log("El area del cuadrado es: " + areaTriangulo +' cm2'); */

/* console.groupEnd(); */


//CIRCULOS
/* const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI; */

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    let diametro  = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

/* console.group("Circulos");

console.log("El diametro del circulo es: " + diametroCirculo(4) +' cm');
console.log("El perimetro del circulo es: " + perimetroCirculo(4) + ' cm');
console.log("El area del circulo es: " + areaCirculo(4) +' cm2'); */
/* console.log("PI es: " + PI);
console.log("El radio del circulo es: " + radioCirculo + ' cm');
console.log("El diametro del circulo es: " + diametroCirculo +' cm');
console.log("El perimetro del circulo es: " + perimetroCirculo + ' cm');
console.log("El area del circulo es: " + areaCirculo +' cm2'); */

/* console.groupEnd(); */

function calcularPerimetroCuadrado(){
    let lado = document.getElementById("ladoCuadrado").value;
    let perimetro = PerimetroCuadrado(lado);
    
    alert("El perimetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado(){
    let lado = document.getElementById("ladoCuadrado").value;
    let area = AreaCuadrado(lado);

    alert("El area del cuadrado es: " + area + "cm2");
}


function calcularDiametroCirculo(){
    let radio = document.getElementById("radioCirculo").value;
    let diametro  = diametroCirculo(radio);
    
    alert("El diametro del circulo es de: " + diametro + "cm");

}

function calcularPerimetroCirculo(){
    let radio = document.getElementById("radioCirculo").value;
    let perimetro = perimetroCirculo(radio);

    alert("El perimetro del circulo es de: " + perimetro + "cm");
}

function calcularAreaCirculo(){
    let radio = document.getElementById("radioCirculo").value;
    let area = areaCirculo(radio);

    alert("El area del circulo es de: " + area + "cm2");
}

function calcularPerimetroTriangulo(){
    let lado1 = document.getElementById("lado1Triangulo").value;
    let lado2 = document.getElementById("lado2Triangulo").value;
    let base = document.getElementById("baseTriangulo").value;

    let perimetro = PermimetroTriangulo(lado1,lado2,base);

    alert("El perimetro del triangulo es: " + perimetro + "cm");
}

function calcularAreaTriangulo(){
    let altura = document.getElementById("alturaTriangulo").value;
    let base = document.getElementById("baseTriangulo").value;

    let area = areaTriangulo(base,altura);

    alert("El area del triangulo es: " + area + "cm2");
}