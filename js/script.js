//1) Chiedi all'utente di inserire il numero di chilometri che si vogliono percorrere
let km = parseInt(prompt('inserisci il numero di km da percorrere'))
console.log(`devi percorrere ${km} km`)

//2) Chiedi all'utente di inserire l'età del passeggero
let age = parseInt(prompt("inserisci l'età del passeggiero"))
console.log(`il passeggero ha ${age} anni`)

//3) Calcola il prezzo del biglietto moltiplicando i chilometri da percorrere per 0.21€
let price = km * 0.21
console.log(`il prezzo non scontato è ${price}`);

//4) In base all'età del passeggero applica uno sconto
if(age < 18){
    price = price - (price * 0.4)
    price = price.toFixed(2);
    console.log(`il prezzo scontato del 40% è ${price} €`);
}
else if(age > 65){
    price = price - (price * 0.8)
    price = price.toFixed(2);
    console.log(`il prezzo scontato del 80% è ${price} €`);
}
else{
    price = price.toFixed(2);
    console.log(`il biglietto costa ${price} €`);    
}