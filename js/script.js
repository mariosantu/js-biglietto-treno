//Chiedere numero km che si vuole percorrere e età per poi calcolare il prezzo totale del viaggio 
// considerando che i minorenni hanno uno sconto del 20% e per gli over 65 del 40%
//prezzo biglietto 0.21€ a km.


//Chiedere KM che si vuole percorrere e chiedere età all'utente

var kmUtente = parseInt( prompt('Quanti km vuole percorrere?') );
//console.log(kmUtente)

var etaUtente = parseInt( prompt('Quanti anni hai?') );
//console.log(etaUtente)

//prezzo biglietto minimo
var costoPrezzoBigliettoMinimo = 0.21;

var prezzoBigliettoSenzaSconto = kmUtente * costoPrezzoBigliettoMinimo;
//console.log(prezzoBigliettoSenzaSconto);

var percent20 = prezzoBigliettoSenzaSconto * 20 / 100;
//console.log(percent20);

var percent40 = prezzoBigliettoSenzaSconto * 40 /100;
//console.log(percent40);

var prezzoscontato20 = prezzoBigliettoSenzaSconto - percent20;
//console.log(prezzoscontato20);

var prezzoscontato40 = prezzoBigliettoSenzaSconto - percent40;
//console.log(prezzoscontato40);

//logica + stamp

if ( etaUtente <= 17 ) {
    alert('il prezzo del tuo biglietto è: ' + prezzoscontato20.toFixed(2));
} else if (etaUtente >= 69 ) {
    alert( 'il prezzo del tuo biglietto è: ' + prezzoscontato40.toFixed(2));
} else {
    alert( 'il prezzo del tuo biglietto è: ' + prezzoBigliettoSenzaSconto.toFixed(2));
}







