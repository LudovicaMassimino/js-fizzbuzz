console.log('ciao')
// consegna:
// scrivi un programma che stampi in console i numeri da 1 a 100,
// Successivamente aggiungi un controllo sul numeri in modo tale che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// in tutti gli altri casi venga stampato il numero stesso




// stampo i numeri da 1 a 100

for(let i = 0; i < 100; i++) { // viene eseguito 100 volte
    // console.log(i + 1);

    let num = i + 1;
    // console.log(num)

   
    const resto3 = num % 3
    const resto5 = num % 5

        // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

    if(resto3 === 0 && resto5 === 0) {
        console.log('FizzBuzz')

        // per i multipli di 5 stampi “Buzz” al posto del numero

    } else if(resto5 === 0) { 
        console.log('Buzz')

        // condizione per la quale per i multipli di 3 viene stampato "Fizz" al posto del numero:
    
    } else if(resto3 === 0) {
        console.log('Fizz')

        // in tutti gli altri casi venga stampato il numero stesso
    } else {
        console.log(num)
    }
}







