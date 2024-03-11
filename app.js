const yourName = prompt('Come ti chiami?');
const min = 1;
const max = 10;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (yourName !== null && yourName.length !== 0) {
   alert("Ciao, " + yourName + "!");
}

const randomNumber = getRandomArbitrary(min, max);
let userNumber = prompt(yourName + ', sto pensando a un numero da 1 a 10. Indovina quale...');

if (userNumber !== null && !isNaN(userNumber)) {
   userNumber = parseInt(userNumber);

   if (userNumber === randomNumber) {
      alert('Complimenti, hai indovinato il numero!');
   } else {
      alert('Mi dispiace, hai sbagliato. Il numero corretto era ' + randomNumber + '.');
   }
} else {
   alert('Input non valido. Inserisci un numero.');
}