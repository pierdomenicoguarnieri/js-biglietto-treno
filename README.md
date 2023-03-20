# Biglietto Treno

## Consegna

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

1. il prezzo del biglietto è definito in base ai km (0.21 € al km)

2. va applicato uno sconto del 20% per i minorenni

3. va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

## Steps

Steps da seguire:

1. Chiedere all'utente di **inserire il numero di chilometri** che vuole percorrere e **salvarli**

2. Chiedere all'utente di **inserire la propria età** e **salvarla**

3. **Calcolare**, utilizzando il numero di chilometri inseriti dall'utente, **il prezzo del biglietto** tenendo conto che il costo del **sigolo chilometro è pari a 0.21€**

4. **Verificare se l'età dell'utente sia minore di 18 o maggiore a 65**

    - Nel caso in cui sia **minore a 18** applicare uno **sconto del 20%** al totale del costo del biglietto calcolato in precedenza.
    
    - Nel caso in cui l'età sia **maggiore a 65** applicare uno **sconto del 40%** al totale del costo del biglietto calcolato in precedenza.

5. **Stampare** a schermo **il costo finale del biglietto con massimo due decimali.**

## Extra

1. Ho aggiunto la parte grafica del sito

2. Ho creato un effetto di transizione tra tre immagini che girano in dissolvenza all'infinito.

3. Ho aggiunto una sezione che spiega il funzionamento del sito ed i parametri che vengono utilizzati per il calcolo del costo del biglietto.

4. Ho stilizzato l'output di JavaScript utilizzando il `Template literals`

5. Ho aggiunto una sezione contenente i partner

6. Ho aggiunto un footer contenete i crediti

7. Ho creato un offcanvas utilizzando Bootstrap


## References

[W3School toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

[StackOverflow toFixed()](https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places)

[bobbyhandz toFixed()](https://bobbyhadz.com/blog/javascript-format-number-to-two-decimal-places)