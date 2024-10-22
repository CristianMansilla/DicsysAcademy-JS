/* Ejercicio fácil:
Escribe un programa que verifique si un número ingresado por el usuario 
es mayor que 10 y menor que 20. Si cumple ambas condiciones, 
imprime "El número está entre 10 y 20" */

/*
!!Nota: no hice el parseo a entero porque por ejemplo: 20.3 me redondearía a 20 y entraría en el rango, cuando esto no es cierto.
*/

function averiguarRangoNumero() {
    let numero = prompt("Escribe un número");

    if (numero >= 10 && numero <= 20) {
        alert("El número está entre 10 y 20");

    } else {
        alert("El número no se encuentra en el rango de 10 - 20");

    }
}



/* 
Ejercicio de nivel medio:
Crea un programa que pregunte al usuario su edad y si es mayor de 18 años 
o menor de 65 años, imprime "Puedes trabajar". 
Utiliza el operador || para combinar las condiciones. */

/* 
!! Nota: Decidí comparar con && en lugar de || porque al ingresar una edad menor a 65 ya cumple la condición, incluso si esa edad fuera 15 años 
*/
function averiguarSiPuedeTrabajar() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad > 18 && edad < 65) {
        alert("Puedes trabajar");
    } else if (edad <= 18) {
        alert("Eres muy pequeño para trabajar");
    } else {
        alert("Ya estás en edad de jubilarte.");
    }
}



/* Ejercicio avanzado:
Desarrolla un programa que solicite al usuario dos números y compruebe 
si ambos son pares. Si lo son, que imprima "Ambos números son pares"; 
sino, imprime "Al menos uno de los números no es par". 
y tienen que usar el operador && para combinar las condiciones. */

function averiguarSiNumeroEsPar() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    if (num1%2==0 && num2%2==0) {
        alert("Ambos son pares");
    } else if (num1%2==0 || num2%2==0) {
        alert("Al menos uno de los números no es par");
    } else {
        alert("Ambos números son impares");
    }
}

