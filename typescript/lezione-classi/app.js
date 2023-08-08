var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    //   public nome: string;
    //   private cognome: string;
    //questo è il modo manuale, si può utilizzare lo shortcut in modo
    //che dichiariamo tutto all'interno del constructor
    function Persona(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        //readonly = una volta che è stata definita nel costruttore
        //la variabile può essere solo letta e non modificata
        // this.nome = nome;
        // this.cognome = nome;
    }
    Persona.prototype.presenta = function () {
        console.log("ciao sono ".concat(this.nome, " ").concat(this.cognome));
    };
    Persona.prototype.saluta = function (persona) {
        console.log("ciao ".concat(this.nome, " ").concat(this.cognome, ", molto piacere"));
    };
    return Persona;
}());
var persona = new Persona("luca", "rossi");
var persona2 = new Persona("paolo", "campana");
var persona3 = new Persona("cristian", "verdi");
// persona.presenta();
// persona2.saluta(persona);
var Studente = /** @class */ (function (_super) {
    __extends(Studente, _super);
    function Studente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Studente;
}(Persona));
var studente = new Studente("luca", "rossi");
