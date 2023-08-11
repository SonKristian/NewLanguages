"use strict";
//I decorators sono delle funzioni che applicchiamo ad una classe
//semplicemnte con la chiocciola
// function Logger(constructor:any){
//     console.log("mando a schermo");
//     console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let Qwerty = class Qwerty {
    constructor() {
        console.log("sto creando un oggetto di qwerty");
    }
};
Qwerty = __decorate([
    Logger("ciao sono il logger della classe Qwerty")
], Qwerty);
// const provaobj = new Prova()
function creaElemento(template, id, nome) {
    return function (constructor) {
        const div = document.getElementById(id);
        const esempio = new constructor(nome); //crea un nuovo oggetto di classe prova
        if (div) {
            div.innerHTML = template;
            div.querySelector(`h1`).textContent = esempio.nome;
        }
    };
}
let Prova = class Prova {
    constructor(nome) {
        this.nome = nome;
        console.log("sto creando un oggetto di prova");
    }
};
Prova = __decorate([
    creaElemento(`<h1></h1>`, "contenuto", "Criii")
], Prova);
