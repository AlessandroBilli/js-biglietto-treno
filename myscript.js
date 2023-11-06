'use script'

const distanza = parseInt (prompt ('Inserisci distanza in km'));
console.log ('Distanza passeggero', distanza);


const età = parseInt (prompt ('Inserisci la tua età'));
console.log ('Età passeggero', età);



const prezzo = distanza * 0.21;
console.log('Prezzo del biglietto:', prezzo);

if (età < 18) {
    const percentualeVenti = 20;
    const sconto = (prezzo * percentualeVenti) / 100;
    console.log('Sconto del 20%:', sconto);
    const prezzoScontato = prezzo - sconto;
    console.log('Prezzo con lo sconto:', prezzoScontato);
  }






