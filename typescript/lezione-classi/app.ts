class Persona {
  //   public nome: string;
  //   private cognome: string;
  //questo è il modo manuale, si può utilizzare lo shortcut in modo
  //che dichiariamo tutto all'interno del constructor

  constructor(private nome: string, private cognome: string) {
    //readonly = una volta che è stata definita nel costruttore
    //la variabile può essere solo letta e non modificata
    // this.nome = nome;
    // this.cognome = nome;
  }

  presenta(): void {
    console.log(`ciao sono ${this.nome} ${this.cognome}`);
  }

  saluta(persona: Persona): void {
    console.log(`ciao ${this.nome} ${this.cognome}, molto piacere`);
  }
}

let persona: Persona = new Persona("luca", "rossi");
let persona2: Persona = new Persona("paolo", "campana");
let persona3: Persona = new Persona("cristian", "verdi");

// persona.presenta();
// persona2.saluta(persona);

class Studente extends Persona {
  // materiaPreferita: string = "storia"

  constructor(
    nome: string,
    cognome: string,
    private materiaPreferita: string
  ) {
    super(nome, cognome);
  }
//   cambia(){
//     this.nome = "sododo"
//se il nome è private non si può cambiare ma se lo cambiassi in protected
//sarebbe possibile cambiare il nome 
//   }
}

const studente: Studente = new Studente("luca", "rossi", "storia");

//le proprietà e metodici "static" possono essere chiamati senza creare un oggetto

