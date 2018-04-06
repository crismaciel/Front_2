var obj = {};
var arr1 = [];

console.log(arr1);

arr1[0] = 'a';
arr1[1] = 'b';
arr1[2] = 'c';
arr1[9] = 'h';

console.log(arr1);

let texto = 'Este pseudo-livro de Português é bom!';
console.log(texto.search('e')); //pos 33
console.log(texto.charAt('26')); // case sensitive
console.log(texto.indexOf('P')); 
console.log(texto.charAt(26)); // letra g
console.log(texto.replace("bom" , "mal")); 
console.log(texto.split());
console.log(texto.split(" "));
console.log(texto.slice(0,4)); //retira uma palavra, corta o texto.
console.log(texto.slice(texto.search("E"), texto.search("e")+1));
