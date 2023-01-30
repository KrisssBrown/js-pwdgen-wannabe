const titleElement = document.getElementById('js-response')




let firstname;
firstname= prompt('Inserisci il tuo nome!');
console.log('la variabile nome è = ', firstname);


let lastname;
lastname= prompt('Inserisci il tuo cognome!');
console.log('la variabile congome è=', lastname);


let color;
color= prompt('Inserisci il tuo colore preferito!');
console.log('la variabile colore è=', color);


let number;
number= prompt ('Inserisci il numero della tua carta di credito o ti ammazzo!');
console.log ('la variabile numero è=', number);


let weapon;
weapon= prompt ('Inserisci la tua arma preferita! E perchè proprio il BARRET M107A1m?');
console.log ('la variabile arma è=', weapon);


titleElement.innerHTML = firstname + lastname + color + number + weapon
console.log (titleElement)

