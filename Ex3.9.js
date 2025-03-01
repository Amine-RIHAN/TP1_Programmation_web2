import readline from 'readline-sync';
//3.9
let pre=readline.question("entrez le prefixe de facture: ");
let numB=readline.question("entrez le numero de base: ");
let suff=readline.question("entrez le suffixe: ");
let numFac=`${pre}-${numB}-${suff}`;
console.log(numFac);