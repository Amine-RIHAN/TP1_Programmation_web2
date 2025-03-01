import readline from 'readline-sync';
//3.4
let estAdulte;
let age= readline.questionInt("entrez age :");
if (age>=18) {
    estAdulte=true;
} else {
    estAdulte=false;
}