import readline from 'readline-sync'
//3.13
let h=readline.questionFloat("Entrez votre nombre d'heures: ");
let hS=h*60*60;
let min=readline.questionFloat("Entrez votre nombre de min: ");
let minS=min*60;
let S=readline.questionFloat("Entrz votre nombre de seconde: ");
let ST=S+hS+minS;
console.log("votre total en seconde est : "+ ST +"s");