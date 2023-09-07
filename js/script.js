/* 
  CALCOLO DEL BIGLIETTO DEL TRENO
  Chiedere al cliente il numero di chilometri che vorra percorrere e la sua età.
  Moltiplicare il numero di chilometri scelti dal cliente al prezzo del biglietto fornito dal database(0.21 € al km).
  Applicare al risultato uno sconto basato sull'età del nostro cliente:
    -sconto del 20% per i minorenni
    -sconto del 40% per gli over 65.
*/

//Gen 
const kmPrice = 0.21;
const name = prompt('Inserire nome');
const lastName = prompt('Inserire Cognome');
const age = prompt('Inserisci la tua età')
const clientKm = prompt('Quanti chilometri vuoi percorrere?')

//Title
const titleMessage = 
`Ciao ${name} ${lastName}, benvenuto.<br/>
Vuoi percorre ${clientKm}Km al prezzo di (${kmPrice}€ al km).`

document.getElementById('title').innerHTML = titleMessage;

//Outgoing text with ticket price
const clientPrice = (clientKm * kmPrice).toFixed(2);
const clientMessage = `Il prezzo del tuo biglietto è: ${clientPrice}€.`;
let discountMessage;
if (age <= 18){
  discountMessage ='Sei riuscito a ricevere il tuo sconto under18!!<br/>Il tuo attuale prezzo è di:' + (clientPrice - (clientPrice * 20 / 100)).toFixed(2) + '€';
}
else if (age >= 65){
  discountMessage ='Sei riuscito a ricevere il tuo sconto over65!!<br/>Il tuo attuale prezzo è di:' + (clientPrice - (clientPrice * 40 / 100)).toFixed(2) + '€';
}
else{
  discountMessage = 'Mi dispiace ma non sei rientrato in nessun nostro sconto.'
}


document.getElementById('ticketprice').innerHTML = clientMessage;
document.getElementById('discountedPriceMessage').innerHTML = discountMessage;