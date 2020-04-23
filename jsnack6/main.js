// Stampa le potenze di 2 fino a 1000

// Creiamo una variabile che ci faccia da contenitore
var potenza = 1
// Creiamo un ciclo di 8 elementi (se lo facessimo di 9 sforeremmo il limite di 1000 per il risultato)
for (var i = 0; i <= 8; i++) {
    // Utiliziamo la variabile potenza e ogni ciclo moltiplichiamo per 2
    potenza = (potenza * 2)
    // Stampiamo i risultati
    console.log('2 elevato alla ' + (i+1) + ' = ' + potenza);
}
