// Sono scemo e non avevo capito la consegna scusatemi

// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente


// Facciamo scegliere un numero all'utente
var numero = parseInt(prompt('Inserisci un numero'))

// Salviamo la variabile cubo che ci servirà come contenitore nel ciclo
var cubo
// Creiamo un ciclo dove la condizione di esistena è che il numero di elementi sia quello scelto dall'utente
for (var i = 0; i <= numero; i++) {
    // Utilizziamo la variabile creata in precedenza per calcolare il cubo di ogni elemento del nostro ciclo
    cubo = i * i * i
    // Stampiamo il risultato per ogni elemento i
    console.log('Il cubo di ' + i + ' è ' + cubo)
}
