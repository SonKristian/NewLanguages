//le generics sono uno strumento che mette in relazione più dati insieme
//creando una sorta di dato composto in modo da creare componenti riutilizzabili
var array = ["2002", "alalah"];
//Array<string> è una generics
function createArray(items) {
    return new Array().concat(items);
}
//T sta per type generico
var arr1 = createArray([1, 2, 34, 4]);
var arr2 = createArray(["a", "b", "c"]);
// arr1.push("339")
//non funziona poichè la generics definisce arr1 come number
var ProvaGenerics = /** @class */ (function () {
    function ProvaGenerics() {
        this.lista = [];
    }
    ProvaGenerics.prototype.aggiungiItem = function (item) {
        this.lista.push(item);
    };
    ProvaGenerics.prototype.rimuoviItem = function (item) {
        this.lista.splice(this.lista.indexOf(item, 1));
    };
    return ProvaGenerics;
}());
var listaStringhe = new ProvaGenerics();
listaStringhe.aggiungiItem("luca");
listaStringhe.aggiungiItem("marco");
listaStringhe.aggiungiItem("anna");
var lsitaNumeri = new ProvaGenerics();
lsitaNumeri.aggiungiItem(1);
lsitaNumeri.aggiungiItem(2);
lsitaNumeri.aggiungiItem(3);
