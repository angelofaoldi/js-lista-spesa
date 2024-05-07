Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

________________________________________

1) Creo un lista della spesa cioè
un const LISTA = [oggetto1, oggetto2, ecc...]

In questo modo l'array LISTA conterrà gli oggetti della spesa

Poi faccio un console.log

2) Creo un ciclo while 

Il ciclo while esegue un blocco di codice finché è verificata la condizione. Si utilizza quando non sappiamo quante volte dovrà essere eseguito il codice.

SINTASSI

while()
{

}

- nelle parentesi tonde inseriamo la condizione
- nelle parentesi graffe inseriamo la logica del ciclo

2.1) prima del ciclo si dichiara una variabile, in modo tale che funga da contatore 
// const i=0 

2.2) inseriamo una condizione
// (i < 10)
finché la variabile i è uguale a 10 il ciclo viene eseguito, altrimenti viene interrotto

2.3) inseriamo la logica del ciclo nelle graffe e, cosa importante, aggiungiamo
// i++
altrimenti il ciclo non verrebbe mai interrotto ed il browser crusherebbe

2.4) creiamo - prima del ciclo while - la variabile "testo" che equivale ad una stringa vuota

// let testo = "";

successivamente
nel ciclo delle graffe
inseriamo la variabile "testo"
a cui "appendiamo" gli elementi della i
separando il tutto con una virgola

// testo += i + ", ";

_______________________________________

è possibile utilizzare la variabile i
come indice dell'array

// const spesa = ["banana", "kiwi", "mele", "arancia"];

// while (spesa[i])

ciò significa che finché esistono elementi
all'indice i, il ciclo viene eseguito, altrimenti viene interrotto e usciamo dal ciclo

facendo in questo modo, nelle graffe:
- stampiamo spesa all'indice i
// testo += spesa[i] + ", ";

- la i++ andrà alla fine

_________________________________________

voglio visualizzare il tutto anche in pagina e non solo in console

creerò un elemento html
(un paragrafo, un div, uno span...)
e darò un id "demo"
poi in javascript andrò ad inserire
la formula

// document.getElementById("demo").innerHTML = testo;


















