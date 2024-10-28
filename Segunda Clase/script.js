/* Desafío: Manejo de Arreglos y Objetos de Hamburguesas

Imagina que tenes una cadena de hamburgueserías que ofrece una gran variedad de combos. 
Para este desafío, hay que escribir un código que trabaje con un arreglo de objetos llamado hamburguesas, 
donde cada objeto representa una hamburguesa con propiedades como nombre y precio.

Ejercicio 1: Filtrar Combos Caros
Tenes que filtrar los combos donde el precio sea mayor a 2000 pesos y mostrar los resultados en la consola 
usando console.table(). En caso de no encontrar ningún combo que cumpla con esta condición, 
mostrar una advertencia con console.warn().

Ejercicio 2: Buscar Combo con papas
Buscar un combo que contenga la palabra 'papas' en su nombre. Si existe un combo que cumple con esta condición:

Mostra al cliente el nombre del combo con un cuadro de diálogo (alert).
Mostra el precio de ese combo en la consola.
Si no se encuentra ningún combo con papas, enviar una advertencia a la consola.

Ejercicio 3: Combos Dobles
Finalmente, filtrar los combos que incluyan la palabra 'doble' en su nombre. Los resultados deben mostrarse 
en una tabla con console.table(). 
Si no se encuentran combos con la palabra 'doble', muestra una advertencia en la consola.

Instrucciones:

Crea el arreglo hamburguesas con al menos cinco objetos que representen distintos combos.
Implementa cada uno de los ejercicios utilizando los métodos de arreglos como filter, find, e includes.
Que el código sea limpio y funcione correctamente.*/

import Hamburguesa from './modelos/Hamburguesa.js';

const hamburguesas = [];

let conQueso = new Hamburguesa("Hamburguesa con queso", 289, 2000, "Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.", "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar");
let bigMac = new Hamburguesa("Big Mac", 505, 5000, "Quizás sea la carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.", "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar");
let mcFiesta = new Hamburguesa("Mc Fiesta", 289, 2200, "Hamburguesa elaborada con carne 100% de carne vacuna, mayonesa, lechuga, tomate.", "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar");
let mcNifica = new Hamburguesa("McNífica", 513, 4800, "En un mundo donde todos buscan lo nuevo todo el tiempo, la McNífica viene a rectificar lo bueno de ser clásico. Carne, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa.", "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar");
let grandTripleMcBacon = new Hamburguesa("Grand Triple McBacon", 1300, 9000, "Tres carnes, inigualable queso cheddar, cebolla, kétchup y mostaza, y el increíble ingrediente que lo hace único: bacon premium.", "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kQX3BMhy/200/200/original?country=ar");
let baconChedarMcMelt = new Hamburguesa("Bacon Cheddar McMelt", 1091.9, 7000, "Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con queso cheddar en feta y fundido, dos tiras de bacon enteras, cebolla grillada en nuestro inigualable pan con semillas de sesamo!", "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXPtaX9/200/200/original?country=ar");


hamburguesas.push(conQueso, bigMac, mcFiesta, mcNifica, grandTripleMcBacon, baconChedarMcMelt);


const $container_hamburguesas = document.getElementById("container_hamburguesas");

function mostrarHamburguesas(hamburguesas) {
    $container_hamburguesas.innerHTML = '';
    if (hamburguesas.length === 0) {
        let mensaje = document.createElement("p");
        mensaje.textContent = "No hay hamburguesas para mostrar con ese filtro seleccionado!";
        $container_hamburguesas.appendChild(mensaje);
    } else {
        hamburguesas.forEach(hamburguesa => {
            let div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                <img src="${hamburguesa.imagen}" alt="${hamburguesa.nombre}">
                <h2>${hamburguesa.nombre}</h2>
                <h3>Calorías: ${hamburguesa.calorias} kcal</h3>
                <div class="card_footer">
                    <h3 class="price">$${hamburguesa.precio}</h3>
                    <button class="filter-button" onclick="verDetalles('${hamburguesa.nombre}','${hamburguesa.descripcion}')">Ver detalles</button>
                </div>
            `;
            $container_hamburguesas.appendChild(div);
        });
    }

}


//Al cargarse el archivo como módulo es necesario declarar de está forma para que la funcion esté disponible de manera global.
window.verDetalles = function (nombre, descripcion) {
    swal(nombre, descripcion);
};



/* 
Ejercicio 1: Filtrar Combos Caros
*/
window.filtrarCombosCaros = function () {
    let precioAComparar = 2000;
    let combosCaros = hamburguesas.filter(hamburguesa => hamburguesa.precio > precioAComparar);
    localStorage.setItem("filtro", "caros")
    if (combosCaros.length > 0) {
        console.table(combosCaros);
        mostrarHamburguesas(combosCaros)
    } else {
        console.warn(`No se han encontrado combos donde el precio sea mayor a $${precioAComparar}!`);
        mostrarHamburguesas(combosCaros)

    }
}


/* 
Aplicando el principio DRY se utilizó la misma función para resolver el ejercicio 2 y 3.
Ejercicio 2: Buscar Combos con papas
Ejercicio 3: Buscar Combos Dobles
*/
window.filtrarComboSegunPalabra = function (palabra){
    let comboPalabra = hamburguesas.filter(hamburguesa => hamburguesa.nombre.toLowerCase().includes(palabra));
    localStorage.setItem("filtro", "palabra:"+palabra);
    if(comboPalabra.length>0){
        console.table(comboPalabra);
        mostrarHamburguesas(comboPalabra);
    }else{
        console.warn(`No se han encontrado combos con esa palabra: ${palabra}!`);
        mostrarHamburguesas(comboPalabra)
    }
}


/* Filtrar todas */
window.filtrarTodas = function (){
    localStorage.removeItem("filtro");
    mostrarHamburguesas(hamburguesas);
}


/* Verificar si hay un filtro activo al cargar la página */
window.onload = function (){
    let filtroActivo = localStorage.getItem("filtro");
    if(filtroActivo){
        if(filtroActivo === "caros"){
            filtrarCombosCaros();
        }else if(filtroActivo.startsWith("palabra:")){
            let palabra = filtroActivo.split(":")[1];
            filtrarComboSegunPalabra(palabra);
        }
    }else{
        mostrarHamburguesas(hamburguesas);
    }
}
