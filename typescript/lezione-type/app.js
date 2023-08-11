"use strict";
//oggetto
let personaobj;
//se non inserisco :object o {}, typescript riconosce automaticamente i tipi dei valori nell'oggetto
personaobj = {
    nome: "luca",
    cognome: "rossi",
    eta: 45,
    indirizzo: {
        via: "Via Roma",
        civico: 181,
        citta: "Roma",
    },
};
function getData(data) {
    const id = data.id;
    console.log(data.id);
}
getData({ id: 1, username: "", password: "" });
//array
const arr = [1, 2, 3];
//tuple
//un array di lunghezza fissa
const tuple = [1, 2];
//accetta solo il numero di elementi dichiarati all'interno delle quadre
//any
let provauno = "bla";
//ad esempio per un array che accetta qualsiasi cosa
//union
//possiamo aggiungere i tipi di dati che ci servono
let prova2 = ["", 34];
let personadue;
personadue = {
    nome: "paolo",
    cognome: "rossi"
};
//enum
var Ruolo;
(function (Ruolo) {
    Ruolo["ADMIN"] = "admin";
    Ruolo["USER"] = "user";
    Ruolo["GUEST"] = "guest";
})(Ruolo || (Ruolo = {}));
// è un tipo di dato che consente di definire un set di costanti 
// denominate con nomi significativi e associati a valori
// numerici o stringhe.
const umano = {
    nome: "Marco",
    cognome: "Rossi",
    ruolo: Ruolo.ADMIN
};
