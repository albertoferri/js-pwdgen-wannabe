// inseriso nome
let fullname = prompt('Come ti chiami?');

document.getElementById('fullname').innerHTML = `Ciao, il tuo nome è ${fullname}!`;


// inserisco cognome
let surname = prompt("Qual'è il tuo cognome?");

document.getElementById('surname').innerHTML = `Mentre, il tuo cognome è ${surname}!`;


// chiedo il colore preferito
let color = prompt("Qual'è il tuo colore preferito?");

document.getElementById('color').innerHTML = `Infine, il tuo colore preferito è il ${color}!`;


// genero una password in base alle risposte date in precedenza
document.writeln("Questa sarà la tua password generata automaticamente:")

document.writeln();

document.writeln(document.getElementById('surname'));

document.writeln(document.getElementById('color'));
document.writeln(23)