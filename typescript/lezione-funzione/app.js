"use strict";
function somma(num1, num2 = 0) {
    return num1 + num2;
}
somma(3);
let x = somma;
//function può essere a tutti gli effetti un tipo di dato
let y;
y = somma;
// y = prova
//questo è un errore poiché prova è void
function prova(z, c = 0) {
    console.log("prova");
}
//void il valore di return è vuoto
//per ts void e undefined sono due cose diverse dato che undefinde
//è un tipo di dato
