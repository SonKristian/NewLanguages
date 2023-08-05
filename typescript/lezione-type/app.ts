//oggetto
let persona: {
  nome: string;
  cognome: string;
  eta: number;
  indirizzo: {
    via: string;
    civico: number;
    citta: string;
  };
};
//se non inserisco :object o {}, typescript riconosce automaticamente i tipi dei valori nell'oggetto

persona = {
  nome: "luca",
  cognome: "rossi",
  eta: 45,
  indirizzo: {
    via: "Via Roma",
    civico: 181,
    citta: "Roma",
  },
};

function getData(data: { id: number; username: string; password: string }) {
  const id = data.id;
  console.log(data.id);
}

getData({ id: 1, username: "", password: "" });

//array
const arr: number[] = [1, 2, 3];

//tuple
//un array di lunghezza fissa
const tuple: [number, number] = [1, 2];
//accetta solo il numero di elementi dichiarati all'interno delle quadre

//any
let prova: any = "bla";
//ad esempio per un array che accetta qualsiasi cosa

//union
//possiamo aggiungere i tipi di dati che ci servono
let prova2: string | number | any[] = ["", 34];

//custom type
type Persona = {
  nome: string;
  cognome: string;
};

let persona2 : Persona

persona2 = {
    nome: "paolo",
    cognome:"rossi"
}

//enum
enum Ruolo {
    ADMIN, 
    USER, 
    GUEST
}

const umano = {
    nome: "Marco",
    cognome: "Rossi",
    ruolo: "admin"
}