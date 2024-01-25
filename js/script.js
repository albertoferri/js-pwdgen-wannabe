// inseriso nome
const fullname = prompt('Come ti chiami?');

document.getElementById('fullname').innerText = `Ciao, il tuo nome è ${fullname}!`;

// inserisco cognome
const surname = prompt("Qual'è il tuo cognome?");

document.getElementById('surname').innerText = `Mentre, il tuo cognome è ${surname}!`;

// chiedo il colore preferito
const color = prompt("Qual'è il tuo colore preferito?");

document.getElementById('color').innerText = `Infine, il tuo colore preferito è il ${color}!`;