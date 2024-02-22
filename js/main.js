function suma() {
    // Explicación algoritmo

    alert("Algoritmo que realiza una suma entre dos valores ingresados por el usuario")
    // Declaración de variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    // Capturamos los datos

    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));
    // Realizamos la operación
    S = A + B;
    // Damos el resultado o respuesta
    alert("El resultado de la suma es: " + S)
}

function opBasicas(){
    // Explicación algoritmo

    alert("Algoritmo que realiza operaciones básicas entre dos valores ingresados por el usuario")
    // Declaración de variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;


    // Capturamos los datos

    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));
    // Realizamos la operación
    S = A + B;
    R = A - B;
    M= A * B;
    D= A / B;
    // Damos el resultado o respuesta
    alert("El resultado de la suma es: " + S);
    alert("El resultado de la resta es: " + R);
    alert("El resultado de la multiplicación es: " + M);
    alert("El resultado de la división es: " + D);
}

function nCuadrado(){
    // Explicación del algoritmo
    alert("Algoritmo que calcula el cuadrado de un número ingresado");
    // Declaración de variables
    let N,C = 0;

    N = parseInt(prompt("Ingrese el primer valor"));

    C = N*N;

    alert("El cuadrado de "+ N +" es " + C);

    // Capturamos los datos

    // Realizamos la operacion

    // Mostramos el resultado
}

function aTriangulo(){
    alert("Algoritmo que calcula el área de un triangulo");
    let B,A,R = 0;

    B = parseInt(prompt("Ingrese la base del triangulo"));
    A = parseInt(prompt("Ingrese la altura del triangulo"));

    R = (B*A)/2;

    alert("El área del triangulo es: "+ R);
}

function conversion(){
    alert ("Algoritmo que calcula las pulgadas, kilometros y milimetros de un dato dado en metros");

    let X, P, K, M = 0;

    X= parseInt(prompt("Ingrese un valor en metros"));

    P= X*39.370;
    K=X/1000;
    M=X*1000;

    alert ("El resultado de pasar " +X+ " metros a pulgadas es: " +P);
    alert ("El resultado de pasar " +X+ " metros a kilometros es: " +K);
    alert ("El resultado de pasar " +X+ " metros a pulgadas es: " +M);
    
    
}

function numeroMayor(){
    alert ("Algoritmo que determina el mayor de dos números ingresados");
    let N1, N2 = 0;
    N1= parseInt(prompt("Ingrese el primer número"));
    N2= parseInt(prompt("Ingrese el segundo número"));

    if (N1==N2){
        alert ("Los valores ingresados son iguales, no sea pendejo");

    } else if(N1>N2){
        alert (N1 + " es mayor que " + N2)
    } else{
        alert (N2+ " es mayor que " + N1);
    }

}

function numeroMenor(){
    alert("Algoritmo que determina el número menor de tres números");
    let X1, X2, X3 = 0;
    X1= parseInt(prompt("Ingrese el primer número"));
    X2= parseInt(prompt("Ingrese el segundo número"));
    X3= parseInt(prompt("Ingrese el tercer número"));

    if ((X1==X2) && (X1==X3)){
        alert ("los tres valores ingresados son iguales");
    } else if((X1>X2) && (X2>X3)){
        alert (X3+ " es el número menor ");
    } else if ((X3>X2) && (X2>X1)){                       
        alert (X1+ " Es el menor de todos");
    } else if ((X1>X2) && (X3>X2)){                       
        alert (X2+ " Es el menor de todos");
    }
}

function promedioN(){
    alert ("Algoritmo que determina el promedio de las notas ")
    let N1,N2,N3,N4,N5,N6,N7, P = 0;
    N1= parseInt(prompt("Ingrese la primera nota"));
    N2= parseInt(prompt("Ingrese la segunda nota"));
    N3= parseInt(prompt("Ingrese la tercera nota"));
    N4= parseInt(prompt("Ingrese la cuarta nota"));
    N5= parseInt(prompt("Ingrese la quinta nota"));
    N6= parseInt(prompt("Ingrese la sexta nota"));
    N7= parseInt(prompt("Ingrese la septima nota"));
    
    P= (N1+N2+N3+N4+N5+N6+N7)/7;

    if (P>=6.1){
        alert ("Su promedio de notas es: " + P + " por lo tanto usted APROBÓ:)")
    } else {
        alert ("Su promedio de notas es: "+ P + " por lo tanto REPROBÓ:(")
    }
    
}

function descuento(){
    alert ("Algoritmo que determina el precio de unas manzanas según el número de kilos");
    let P, K,D, D1, D3= 0;
    P= parseInt(prompt("Ingrese el precio por kilo"));
    K= parseInt(prompt("Ingrese el número de kilos"));

    D= P*K;
    D1= (D-((D*10)/100));
    D2= D-((D*15)/100);
    D3= (D-((D*20)/100));

    if ((K>=0) && (K<=2)){
        alert ("El precio de su compra es: " +D+ " y no se le aplica ningún descuento");
    } else if ((K>=3) && (K<=5)) {
        alert ("El precio de su compra es: " +D+ " y aplicando el 10% de descuento su compra total es: "+ D1);
    } else if ((K>=6) && (K<=10)){
        alert ("El precio de su compra es: " +D+ " y aplicando el 15% de descuento su compra total es: "+D2);
    } else if (K>=11){
        alert ("El precio de su compra es: " +D+ " y aplicando el 20% de descuento su compra total es: "+ D3);
    }
}

function salarioSemanal(){
    alert ("Algoritmo que determina el salario semanal");
    let H,E, T, A= 0;
    H= parseInt(prompt("Ingrese las horas trabajadas"));
    E= parseInt(prompt("Si realizó horas extras, escriba la cantidad de horas "));
    T= H*12500;
    A= (H*12500)+ (E*18000);
    if ((H<=40) && (E<=0)){
        alert("Su salario semanal teniendo en cuenta las horas trabajadas es de: "+ T);
    }else if(H>40){
        alert("El limite de horas es de 40, a partir de ahí en adelante cuentan como horas extra:)");
    } else if  (E>0){
        alert ("Su salario semanal contando las horas extras es de: "+A);
       }

}