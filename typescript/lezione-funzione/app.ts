function somma (num1: number, num2 = 0) : number{
    return num1 + num2;
}

somma(3)

let x : Function = somma
//function può essere a tutti gli effetti un tipo di dato
let y: (num1: number, num2: number) => number
y = somma

// y = prova
//questo è un errore poiché prova è void


function prova (num1: number, num2 = 0) : void{
    return 
}
//void il valore di return è vuoto
//per ts void e undefined sono due cose diverse dato che undefinde
//è un tipo di dato