//le generics sono uno strumento che mette in relazione più dati insieme
//creando una sorta di dato composto in modo da creare componenti riutilizzabili

const array : Array<string>= ["2002", "alalah"]
//Array<string> è una generics


function createArray<T extends number | string>(items:T[]): T[]{
    return new Array().concat(items)
}
//T sta per type generico

const arr1 = createArray([1,2,34,4])
const arr2 = createArray(["a","b","c"])

// arr1.push("339")
//non funziona poichè la generics definisce arr1 come number

class ProvaGenerics<T>{
    private lista: T[]=[]

    aggiungiItem(item:T){
        this.lista.push(item)
    }
    
    rimuoviItem(item:T){
        this.lista.splice(this.lista.indexOf(item, 1))
    }
}

const listaStringhe = new ProvaGenerics<string>()
listaStringhe.aggiungiItem("luca")
listaStringhe.aggiungiItem("marco")
listaStringhe.aggiungiItem("anna")

const lsitaNumeri = new ProvaGenerics<number>()
lsitaNumeri.aggiungiItem(1)
lsitaNumeri.aggiungiItem(2)
lsitaNumeri.aggiungiItem(3)