interface Prova {
  nome: string;
  saluta(): void; //va trattato come un metodo abstract quindi non si può definire cosa fa
}

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

class X implements Prova {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
  saluta(): void {
    throw new Error("Method not implemented.");
  }
}

//esempio

abstract class Dispositivo {
  constructor(protected nome: string, protected anno: number) {}

  abstract accendi(): void;
  abstract spegni(): void;
}

interface Internet {
  ip: string;
  connettiInternet(): void;
}

class Telefono extends Dispositivo implements Internet {
  ip: string;

  constructor(nome: string, anno: number, ip: string) {
    super(nome, anno);
    this.ip = ip;
  }

  accendi(): void {
    console.log("accendi telefono");
  }
  spegni(): void {
    console.log("spegni telefono");
  }

  connettiInternet(): void {
    console.log("telefono si connette");
  }
}

class Smartphone extends Dispositivo implements Internet {
  ip: string;

  constructor(nome: string, anno: number, ip: string) {
    super(nome, anno);
    this.ip = ip;
  }

  accendi(): void {
    console.log("accendi Smartphone");
  }
  spegni(): void {
    console.log("spegni Smartphone");
  }
  connettiInternet(): void {
    console.log("smartphone si connette");
  }
}

class Computer extends Dispositivo implements Internet {
  ip: string;

  constructor(nome: string, anno: number, ip: string) {
    super(nome, anno);
    this.ip = ip;
  }

  accendi(): void {
    console.log("accendi PC");
  }
  spegni(): void {
    console.log("spegni PC");
  }
  connettiInternet(): void {
    console.log("PC si connette");
  }
}

//le inteface possono implementare altre inteface
//solo le interface possono estendere più cose poiché è un caso di particolare

interface Z {
  nome: string;
}

interface K extends Z {
  cognome: string;
  respira(): void;
}

interface L {
  telefono: string;
  saluta(): void;
}

interface W extends K, L {
  via: string;
  mangia(): void;
}

class Elemento implements W {
  via: string;
  nome: string;
  telefono: string;
  cognome: string;

  constructor(via: string, nome: string, telefono: string, cognome: string) {
    this.via = via;
    this.nome = nome;
    this.cognome = cognome;
    this.telefono = telefono;
  }

  respira(): void {
    throw new Error("Method not implemented.");
  }
  
  mangia(): void {
    throw new Error("Method not implemented.");
  }

  saluta(): void {
    throw new Error("Method not implemented.");
  }
}
