'use strict';


let LISTA = ["cioccolato", "caffè", "torrone"];
console.log(LISTA);

// INIZIALIZZAZIONE CONTATORE
let contatore = 0;

// CREATO UNA LISTA HTML
// RICHIAMO LA LISTA (ID LISTA) IN JS

const ul = document.getElementById('lista');

/* ora siccome

- contatore = 0
- LISTA = 3

contatore sarà sempre minore di LISTA
quindi da qui si può iniziare il ciclo while */

// CICLO WHILE

while (contatore < LISTA.length)
    
    {
        
    //creo un elemento li
    const li = document.createElement('li');

    //creo un elemento i
    const i = document.createElement('i');

    //creo un elemento h5
    const h5 = document.createElement('h5');

    //in h5 metto l'elemento della lista alla posizione [contatore]
    h5.innerText = LISTA[contatore];

    //appendo al mio li gli elementi i e h5
    li.append(i, h5)

    ul.append(li);

    contatore++;





    }






