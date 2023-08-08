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
var _a;
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
    // console.log(`ciao sono ${this.nome} ${this.cognome}`);
    //siccome è abstract tutte le classi estese persona devono necessariamente
    //utilizzare questo metodo
    Persona.prototype.saluta = function (persona) {
        console.log("ciao ".concat(this.nome, " ").concat(this.cognome, ", molto piacere"));
    };
    return Persona;
}());
// let persona: Persona = new Persona("luca", "rossi");
// let persona2: Persona = new Persona("paolo", "campana");
// let persona3: Persona = new Persona("cristian", "verdi");
// persona.presenta();
// persona2.saluta(persona);
var Studente = /** @class */ (function (_super) {
    __extends(Studente, _super);
    // materiaPreferita: string = "storia"
    function Studente(nome, cognome, materiaPreferita) {
        var _this = _super.call(this, nome, cognome) || this;
        _this.materiaPreferita = materiaPreferita;
        return _this;
    }
    //   cambia(){
    //     this.nome = "sododo"
    //se il nome è private non si può cambiare ma se lo cambiassi in protected
    //sarebbe possibile cambiare il nome
    //   }
    Studente.prototype.presenta = function () {
        console.log("sono lo studente ".concat(this.nome));
    };
    return Studente;
}(Persona));
var studente = new Studente("luca", "rossi", "storia");
//le proprietà e metodi "static" possono essere chiamati senza creare un oggetto
//singleton è un pattern di programmazione che ci impone di utilizzare un unica istanza
//di una classe
var Preside = /** @class */ (function () {
    function Preside(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Preside.getInstance = function () {
        if (Preside.instance) {
            return this.instance;
        }
        this.instance = new Preside("Marco", "Verdi");
    };
    Preside.prototype.presenta = function () {
        console.log("buongiorno sono il preside ".concat(this.nome, " ").concat(this.cognome));
    };
    return Preside;
}());
(_a = Preside.getInstance()) === null || _a === void 0 ? void 0 : _a.presenta();
