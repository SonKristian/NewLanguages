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
//una differenza tra interface ed abstract class è che
//la abstract class può avere metodi che non sono abstract
//differenza tra custom type ed interface
//la differenza è che le interface le utilizziamo per essere implementate
//nelle casi per dare funzionalità aggiuntive mentre il custom type possono essere usati per creare tipi complessi o unioni di tipi esistenti
// abstract class Provaa {
//     nome:string
//     saluta() : void
// }
//nelle interface non possono contenere modificatori ma solo readonly
//posso implementare più interface ma posso fare extend solo di una classe
var X = /** @class */ (function () {
    function X(nome) {
        this.nome = nome;
    }
    X.prototype.saluta = function () {
        throw new Error("Method not implemented.");
    };
    return X;
}());
//esempio
var Dispositivo = /** @class */ (function () {
    function Dispositivo(nome, anno) {
        this.nome = nome;
        this.anno = anno;
    }
    return Dispositivo;
}());
var Telefono = /** @class */ (function (_super) {
    __extends(Telefono, _super);
    function Telefono(nome, anno, ip) {
        var _this = _super.call(this, nome, anno) || this;
        _this.ip = ip;
        return _this;
    }
    Telefono.prototype.accendi = function () {
        console.log("accendi telefono");
    };
    Telefono.prototype.spegni = function () {
        console.log("spegni telefono");
    };
    Telefono.prototype.connettiInternet = function () {
        console.log("telefono si connette");
    };
    return Telefono;
}(Dispositivo));
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(nome, anno, ip) {
        var _this = _super.call(this, nome, anno) || this;
        _this.ip = ip;
        return _this;
    }
    Smartphone.prototype.accendi = function () {
        console.log("accendi Smartphone");
    };
    Smartphone.prototype.spegni = function () {
        console.log("spegni Smartphone");
    };
    Smartphone.prototype.connettiInternet = function () {
        console.log("smartphone si connette");
    };
    return Smartphone;
}(Dispositivo));
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer(nome, anno, ip) {
        var _this = _super.call(this, nome, anno) || this;
        _this.ip = ip;
        return _this;
    }
    Computer.prototype.accendi = function () {
        console.log("accendi PC");
    };
    Computer.prototype.spegni = function () {
        console.log("spegni PC");
    };
    Computer.prototype.connettiInternet = function () {
        console.log("PC si connette");
    };
    return Computer;
}(Dispositivo));
var Elemento = /** @class */ (function () {
    function Elemento(via, nome, telefono, cognome) {
        this.via = via;
        this.nome = nome;
        this.cognome = cognome;
        this.telefono = telefono;
    }
    Elemento.prototype.respira = function () {
        throw new Error("Method not implemented.");
    };
    Elemento.prototype.mangia = function () {
        throw new Error("Method not implemented.");
    };
    Elemento.prototype.saluta = function () {
        throw new Error("Method not implemented.");
    };
    return Elemento;
}());
