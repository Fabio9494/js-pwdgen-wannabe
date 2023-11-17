let nome_utente = prompt("Inserisci nome utente");
console.log(nome_utente)

let cognome_utente = prompt("Inserisci cognome utente");
console.log(cognome_utente)

let colore_preferito = prompt("Inserisci colore preferito");
console.log(colore_preferito)

document.getElementById("password-poco-sicura").innerHTML = `La tua password poco sicura è: ${nome_utente}${cognome_utente}${colore_preferito}`;