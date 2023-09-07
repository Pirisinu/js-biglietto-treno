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
const clientPrice = clientKm * kmPrice;
const clientMessage = `Il prezzo del tuo biglietto è: ${clientPrice}€.`;
let discountedPriceMessage;
if (age <= 18){
  discountedPriceMessage = clientPrice - (clientPrice * 20 / 100);
}
else if (age >= 65){
  discountedPriceMessage = clientPrice - (clientPrice * 40 / 100);
}

const discountMessage =
`Hai ricevuto uno sconto!!<br/>
Il prezzo del tuo biglietto ora è di <strong>${discountedPriceMessage}€</strong>`;

document.getElementById('ticketprice').innerHTML = clientMessage;
document.getElementById('discountedPrice').innerHTML = discountMessage;