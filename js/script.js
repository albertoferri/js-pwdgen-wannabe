// inseriso nome
const fullname = prompt('Come ti chiami?');

document.getElementById('fullname').innerText = `Ciao, il tuo nome è ${fullname}!`;

// inserisco cognome
const surname = prompt("Qual'è il tuo cognome?");

document.getElementById('surname').innerText = `Ciao, il tuo cognome è ${surname}!`;