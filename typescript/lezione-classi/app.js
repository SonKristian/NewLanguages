"use strict";
var _a;
class Persona {
    //   public nome: string;
    //   private cognome: string;
    //questo è il modo manuale, si può utilizzare lo shortcut in modo
    //che dichiariamo tutto all'interno del constructor
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        //readonly = una volta che è stata definita nel costruttore
        //la variabile può essere solo letta e non modificata
        // this.nome = nome;
        // this.cognome = nome;
    }
    // console.log(`ciao sono ${this.nome} ${this.cognome}`);
    //siccome è abstract tutte le classi estese persona devono necessariamente
    //utilizzare questo metodo
    saluta(persona) {
        console.log(`ciao ${this.nome} ${this.cognome}, molto piacere`);
    }
}
// let persona: Persona = new Persona("luca", "rossi");
// let persona2: Persona = new Persona("paolo", "campana");
// let persona3: Persona = new Persona("cristian", "verdi");
// persona.presenta();
// persona2.saluta(persona);
class Studente extends Persona {
    // materiaPreferita: string = "storia"
    constructor(nome, cognome, materiaPreferita) {
        super(nome, cognome);
        this.materiaPreferita = materiaPreferita;
    }
    //   cambia(){
    //     this.nome = "sododo"
    //se il nome è private non si può cambiare ma se lo cambiassi in protected
    //sarebbe possibile cambiare il nome
    //   }
    presenta() {
        console.log(`sono lo studente ${this.nome}`);
    }
}
const studente = new Studente("luca", "rossi", "storia");
//le proprietà e metodi "static" possono essere chiamati senza creare un oggetto
//singleton è un pattern di programmazione che ci impone di utilizzare un unica istanza
//di una classe
class Preside {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    static getInstance() {
        if (Preside.instance) {
            return this.instance;
        }
        this.instance = new Preside("Marco", "Verdi");
    }
    presenta() {
        console.log(`buongiorno sono il preside ${this.nome} ${this.cognome}`);
    }
}
(_a = Preside.getInstance()) === null || _a === void 0 ? void 0 : _a.presenta();
