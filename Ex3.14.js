import readline from 'readline-sync'
//3.14
let prenom=readline.question("Entrez votre prenom: ");
let annee=readline.questionInt("Entrez votre annee de naissance: ");
let motPass=`${prenom}1234!`;
console.log("Votre mot de pass c'est : "+motPass);