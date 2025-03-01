import readline from 'readline-sync';
//3.11
let mot=readline.question("entrez un mot: ");
let i;
let j;
let palindrome;
for(i=0, j=mot.length-1; i<=mot.length-1, j>=0;i++, j--){
    if(mot[i]===mot[j]){
        palindrome= true;
    }
    else{
        palindrome= false;
    }
}
if (palindrome===true) {
    console.log(mot + " est un palindrome.");
} else {
    console.log(mot + " est n'est pas un palindrome.");
}