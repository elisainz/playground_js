var names = ["Brisa", "Erik", "Regina", "Tomas", "Elizabeth", "Matias", "Leandro", "Agustina", "Alejandro", "Amad", "Genaro", "German", "Ines", "Jose", "Joseph", "Juan Carlos", "Leonardo", "Lighuen", "Luz", "Maria", "Mariel", "Matias", "Miriam", "Monica", "Nahuel", "Silvina"];
names.sort(); /*para ordenar alfabeticamente, default*/

var first = names[0]; /*para ver el primer elemento del array*/
var last = names[names.length - 1]; /*para ver el ultimo elemento del array*/

console.log(first);
console.log(last);

for (var i = 0; i < names.length; i++) {
    /*mostrar todos los elementos usando for, i++ para cambiar posicion*/
    console.log(names[i]);
}


/* var ages = [18, 20, 32, 19, 19, 21, 24, 22, 23, 18, 26, 33, 25, 41, 45, 23,18, 20, 19, 21, 24, 29, 22, 18, 20, 23];
var i = 0;
while (ages[i]) {console.log(ages[i]); /*si el console log se pusiera al final no se imprimiria el primer numero, arrancaria del 20, despues se hace el i++
  i++;               
} */


function printEven() {
    var ages = [18, 20, 32, 19, 19, 21, 24, 22, 23, 18, 26, 33, 25, 41, 45, 23, 18, 20, 19, 21, 24, 29, 22, 18, 20, 23];
    for (var i = 0; i < ages.length; i++) {
        return ages;
    } /*mostrar las edades usando for en vez de while, while usado anteriormente pasa a estar comentado*/ {
        if (ages[i] % 2 == 0) {
           return ages;
        }
    }
}
