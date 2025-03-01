import readline from 'readline-sync';
//3.1
let x = readline.questionInt("entrez x: ");
let y= readline.questionInt("entrez y: ");
console.log("x="+x+"y="+y);
[x,y]=[y,x];
console.log("x="+x+"y="+y);