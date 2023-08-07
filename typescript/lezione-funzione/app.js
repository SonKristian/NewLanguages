function somma(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
somma(3);
var x = somma;
//function può essere a tutti gli effetti un tipo di dato
var y;
y = somma;
// y = prova
//questo è un errore poiché prova è void
function prova(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return;
}
//void il valore di return è vuoto
//per ts void e undefined sono due cose diverse dato che undefinde
//è un tipo di dato
