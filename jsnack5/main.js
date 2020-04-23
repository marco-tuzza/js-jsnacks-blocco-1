// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

// Chiediamo all'utente di forninrci un numero
var numero = prompt('Inserisci un numero')
// Creiamo una variabile che ci serve da contenitore per calcolare il cubo del numero scelto dal nostro utente
var cubo = numero
// Utilizziamo un ciclo per moltiplicare il numero scelto dal nostro utente per tre volte e calcolare così il cubo
for (var i = 0; i < 2; i++) {
    // La variabile cubo ci torna utile per poter memorizzare il risultato di ogni moltiplicazione effettuata dal ciclo, in modo tale da poter prendere il risultato del ciclo precedente e rimoltiplicarlo per il numero scelto dall'utente.
    cubo = cubo * numero
}
// Stampiamo il risultato
console.log('Il cubo di ' + numero + ' è ' + cubo)
