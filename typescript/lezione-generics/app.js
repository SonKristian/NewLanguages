"use strict";
//le generics sono uno strumento che mette in relazione più dati insieme
//creando una sorta di dato composto in modo da creare componenti riutilizzabili
const array = ["2002", "alalah"];
//Array<string> è una generics
function createArray(items) {
    return new Array().concat(items);
}
//T sta per type generico
const arr1 = createArray([1, 2, 34, 4]);
const arr2 = createArray(["a", "b", "c"]);
// arr1.push("339")
//non funziona poichè la generics definisce arr1 come number
class ProvaGenerics {
    constructor() {
        this.lista = [];
    }
    aggiungiItem(item) {
        this.lista.push(item);
    }
    rimuoviItem(item) {
        this.lista.splice(this.lista.indexOf(item, 1));
    }
}
const listaStringhe = new ProvaGenerics();
listaStringhe.aggiungiItem("luca");
listaStringhe.aggiungiItem("marco");
listaStringhe.aggiungiItem("anna");
const lsitaNumeri = new ProvaGenerics();
lsitaNumeri.aggiungiItem(1);
lsitaNumeri.aggiungiItem(2);
lsitaNumeri.aggiungiItem(3);
