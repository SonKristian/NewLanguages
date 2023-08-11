//I decorators sono delle funzioni che applicchiamo ad una classe
//semplicemnte con la chiocciola
// function Logger(constructor:any){
//     console.log("mando a schermo");
//     console.log(constructor);
// }

//questo è un decorator factory
function Logger(messaggio: string) {
  return function (constructor: any) {
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

@Logger("ciao sono il logger della classe Qwerty")
class Qwerty {
  constructor() {
    console.log("sto creando un oggetto di qwerty");
  }
}
// const provaobj = new Prova()

function creaElemento(template: string, id: string, nome:string) {
  return function (constructor: any) {
    const div = document.getElementById(id);
    const esempio = new constructor(nome); //crea un nuovo oggetto di classe prova
    if (div) {
      div.innerHTML = template;
      div.querySelector(`h1`)!.textContent = esempio.nome
    }
  };
}

@creaElemento(`<h1></h1>`, "contenuto", "Criii")
class Prova {
  constructor(public nome:string) {
    console.log("sto creando un oggetto di prova");
  }
}