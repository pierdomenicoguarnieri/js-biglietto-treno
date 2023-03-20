const km = prompt("Inserisci il numero di chilometri che vuoi percorrere:");

const age = prompt("Inserisci la tua età:");

let price = (km * 0.21);

const output = document.getElementById("mainOutput");

if(age < 18){
  const originalPrice = price;
  const percentage = (price / 100);
  price = price - (percentage * 20);
  output.innerHTML = `
  <h1>Ciao! Hai scelto di percorrere ${km}km ed hai iserito la seguente età: ${age} anni.</h1> 
  <h2>Il prezzo del biglietto è: ${price.toFixed(2)}€</h2>
  `
