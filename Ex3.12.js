import readline from 'readline-sync'
//3.12
let a=readline.questionFloat("Entrez 1er note: ");
let ca=readline.questionFloat("Entrez le coefficient de la 1er note: ");
let b=readline.questionFloat("Entrez 2eme note: ");
let cb=readline.questionFloat("Entrez le coefficient de la 2eme note: ");
let c=readline.questionFloat("Entrez 3eme note: ");
let cc=readline.questionFloat("Entrez le coefficient de la 3eme note: ");
let moyenne=(a*ca+b*cb+c*cc)/(ca+cb+cc);
console.log("votre moyenne est= "+ moyenne);