/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
1 il prezzo del biglietto è definito in base ai km (0.21 € al km)
2 va applicato uno sconto del 20% per i minorenni
3 va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

//CHIEDO all'utente il numero di km da percorrere
const km = parseInt(prompt("Per favore inserisci il numero di chilometri da percorrere"));
console.log(km);

//CHIEDO all'utente la sua eta'
const userEta = parseInt(prompt("Per favore inserisci la tua eta'"));
console.log(userEta);

//Calcolo del prezzo totale del viaggio (0.21 € al km)
const priceKm = 0.21;
let calcTicket = priceKm * km;
console.log(calcTicket);

//Definisco i valori "minorenne" ed "over65"
let minorenne = userEta < 18;
let over65 = userEta > 65;

//Definisco la mia variabile sullo sconto
let sconto;

if (minorenne) { //SE minorenne applico uno sconto del 20%
    sconto = calcTicket * 0.20;
    calcTicket = calcTicket - sconto
    console.log(sconto, calcTicket);
} else if (over65) { //ALTRIMENTI over 65 applico uno sconto del 40%
    sconto = calcTicket * 0.40;
    calcTicket = calcTicket - sconto
    console.log(sconto, calcTicket);
}

//OUTPUT finale in forma umana (ovvero piu' comprensibile numericamente parlando)