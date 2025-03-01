import readline from 'readline-sync';
//3.10
let mot=readline.question("entrez un mot: ");
let inv=" ";
let i;
for(i=str.length-1; i>=0;i--){
    inv+= mot[i];
}
console.log("le mot apres l'inversement "+inv);