const km = prompt("Inserisci il numero di chilometri che vuoi percorrere:");

const age = prompt("Inserisci la tua età:");

let price = (km * 0.21);

const output = document.getElementById("content");

if(age < 18){
  const originalPrice = price;
  const percentage = (price / 100);
  price = price - (percentage * 20);
  output.innerHTML = `
  <span class="fs-4 py-3">Hai scelto di percorrere ${km}km ed hai iserito la seguente età: ${age} anni.</span> 
  <p class="fs-5 pb-3">Il prezzo del biglietto originalmente è di <span class="text-decoration-line-through">${originalPrice.toFixed(2)}€</span>. Dopo aver applicato lo sconto del 20% il prezzo del biglietto è di: <span class="fw-semibold">${price.toFixed(2)}€</span>.</p>
  `
}else if(age >= 65){
  const originalPrice = price;
  const percentage = (price / 100);
  price = price - (percentage * 40);
  output.innerHTML = `
  <span class="fs-4 py-3">Hai scelto di percorrere ${km}km ed hai iserito la seguente età: ${age} anni.</span> 
  <p class="fs-5 pb-3">Il prezzo del biglietto originalmente è di <span class="text-decoration-line-through">${originalPrice.toFixed(2)}€</span>. Dopo aver applicato lo sconto del 40% il prezzo del biglietto è di: <span class="fw-semibold">${price.toFixed(2)}€</span>.</p>
  `
}else{
  output.innerHTML = `
  <span class="fs-4 py-3">Hai scelto di percorrere ${km}km ed hai iserito la seguente età: ${age} anni.</span> 
  <p class="fs-5 pb-3">Il prezzo del biglietto è di: <span class="fw-semibold">${price.toFixed(2)}€</span>. Non è stato applicato nessuno sconto.</p>
  `
}