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

var ages = [18, 20, 32, 19, 19, 21, 24, 22, 23, 18, 26, 33, 25, 41, 45, 23, 18, 20, 19, 21, 24, 29, 22, 18, 20, 23];
for (var i = 0; i < ages.length; i++) {
  console.log(ages[i]);
} /*mostrar las edades usando for en vez de while, while usado anteriormente pasa a estar comentado*/

function printEven() {
  for (var i = 0; i < ages.length; i++) /*mostrar ademas los numeros pares del array*/ {
    if (ages[i] % 2 == 0) {
      console.log(ages[i]);
    }
  }
}
printEven(); /*llamar a la funcion para que se ejecute, afuera de las llaves*/


function printLowestNumber() /*imprimir numero mas chico del array*/ {
  const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
  const min = Math.min(...arr)
  console.log(min)
}
printLowestNumber(); /*llamar a la funcion para que se ejecute, afuera de las llaves*/


function printBiggestNumber() /*imprimir numero mas grande del array*/ {
  const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
  const max = Math.max(...arr)
  console.log(max)
}
printBiggestNumber(); /*llamar a la funcion para que se ejecute, afuera de las llaves*/



function printIndex2(array, index) /*dos parametros, funcion fija*/ /*imprimir valor de elemento en determinada posicion*/ {
  console.log(array[index]);
}

var array1 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index1 = 1;
printIndex2 /*llamo a la funcion fija*/(array1, index1); /*le ingreso mi array e index personalizados*/


/*si quisiera saber en que posicion se encuentra el numero "23" de mi array --> console.log(array1.indexOf(23)); */



function Find_duplicate_in_array(array) /*un parametro, funcion fija*/ /*imprimir valores repeidos en un array*/ {
  console.log(array)
}

var array2 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var duplicates2 = array2.reduce(function (acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
  return acc;
}, []);
Find_duplicate_in_array(duplicates2); //* = 6, 23, 33, 100 (actual array == [6, 23, 33, 100]) */



function TransformArrayToString (array) /*un parametro, funcion fija*/ /*transformar array a string*/ {
  console.log(array)
}

var myColor = ["Red", "Green", "White", "Black"];
  myColor.toString();
TransformArrayToString (myColor);









