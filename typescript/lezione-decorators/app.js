//I decorators sono delle funzioni che applicchiamo ad una classe
//semplicemnte con la chiocciola
// function Logger(constructor:any){
//     console.log("mando a schermo");
//     console.log(constructor);
// }
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
//questo è un decorator factory
function Logger(messaggio) {
    return function (constructor) {
        console.log(messaggio);
        console.log(constructor);
    };
}
// @Logger("ciao sono il logger della classe Prova")
// class Prova {
//   constructor() {
//     console.log("sto creando un oggetto di prova");
//   }
// }
var Qwerty = function () {
    var _classDecorators = [Logger("ciao sono il logger della classe Qwerty")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Qwerty = _classThis = /** @class */ (function () {
        function Qwerty_1() {
            console.log("sto creando un oggetto di qwerty");
        }
        return Qwerty_1;
    }());
    __setFunctionName(_classThis, "Qwerty");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Qwerty = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Qwerty = _classThis;
}();
// const provaobj = new Prova()
function creaElemento(template, id, nome) {
    return function (constructor) {
        var div = document.getElementById(id);
        var esempio = new constructor(nome); //crea un nuovo oggetto di classe prova
        if (div) {
            div.innerHTML = template;
            div.querySelector("h1").textContent = esempio.nome;
        }
    };
}
var Prova = function () {
    var _classDecorators_1 = [creaElemento("<h1></h1>", "contenuto", "Criii")];
    var _classDescriptor_1;
    var _classExtraInitializers_1 = [];
    var _classThis_1;
    var Prova = _classThis_1 = /** @class */ (function () {
        function Prova_1(nome) {
            this.nome = nome;
            console.log("sto creando un oggetto di prova");
        }
        return Prova_1;
    }());
    __setFunctionName(_classThis_1, "Prova");
    (function () {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        Prova = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return Prova = _classThis_1;
}();
