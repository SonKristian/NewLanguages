"use strict";
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
class X {
    constructor(nome) {
        this.nome = nome;
    }
    saluta() {
        throw new Error("Method not implemented.");
    }
}
//esempio
class Dispositivo {
    constructor(nome, anno) {
        this.nome = nome;
        this.anno = anno;
    }
}
class Telefono extends Dispositivo {
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log("accendi telefono");
    }
    spegni() {
        console.log("spegni telefono");
    }
    connettiInternet() {
        console.log("telefono si connette");
    }
}
class Smartphone extends Dispositivo {
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log("accendi Smartphone");
    }
    spegni() {
        console.log("spegni Smartphone");
    }
    connettiInternet() {
        console.log("smartphone si connette");
    }
}
class Computer extends Dispositivo {
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log("accendi PC");
    }
    spegni() {
        console.log("spegni PC");
    }
    connettiInternet() {
        console.log("PC si connette");
    }
}
class Elemento {
    constructor(via, nome, telefono, cognome) {
        this.via = via;
        this.nome = nome;
        this.cognome = cognome;
        this.telefono = telefono;
    }
    respira() {
        throw new Error("Method not implemented.");
    }
    mangia() {
        throw new Error("Method not implemented.");
    }
    saluta() {
        throw new Error("Method not implemented.");
    }
}
