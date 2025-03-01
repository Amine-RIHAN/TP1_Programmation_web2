import readline from 'readline-sync';
//3.8
let HT=readline.questionFloat("Entrez le prix Hors taxe: ");
let TVA=readline.questionFloat("Entrez le taux de TVA (parexemple : 10): ");
let TTC=HT+(TVA/100*HT);
console.log("le prix total TTC= "+TTC);