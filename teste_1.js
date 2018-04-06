var obj = {};
var arr1 = ['alfabeto, abecedário'];

console.log(arr1.sort());
console.log(arr1.sort((a,b) => {return b > a}));
var arr2 = [12, 24, 'teste', true, obj];
console.log(arr2);
console.log(arr1.concat(arr2));
arr1.push('lista'); //lista tudo de arr1
var ultimoElemento = arr1.pop();
console.log(ultimoElemento);
console.log(arr1); // retira o último elemento da lista.
var primeiroElemento = arr1.shift();
console.log(primeiroElemento);
console.log(arr1);
arr1.unshift(ultimoElemento);
//console.log(arr1);

//var numeros = [11, 25, 49, 36, 15,0];
//console.log(numeros.sort());
//console.log(numeros.sort().reverse());

//console.log(numeros.sort((a,b) => {return b - a}));

//substring e substr
let texto1 = "Este tutorial é aberto";
console.log(texto1.substring(5,13));
var tamtexto1 = texto1.length;
console.log(texto1.substr(5,8));

var fruits = ["banana", "orange", "lemon", "apple", "mango"];
var citrus1 = fruits.slice(2,3);
var citrus2 = fruits.slice(3);
console.log(citrus1);
console.log(citrus2);
console.log(citrus1.toString());
console.log(citrus1.toString().replace(/,/g, "-"));
