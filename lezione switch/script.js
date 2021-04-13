var primoNumero = parseInt(prompt("Inserisci il primo numero"));
var secondoNumero = parseInt(prompt("inserisci il secondo numero"));
var operazione = prompt("Quale operazione vuoi eseguire tra queste: addizione (add), sottrazione, moltiplicazione, divisone")

// 

var risultato;



switch (operazione) {
    case "add": //non specificare niente equivale in questo caso a scrivere: 
    case "addizione":
        risultato = primoNumero + secondoNumero;
        break;

    case "sottrazione":
        risultato = primoNumero - secondoNumero
        break;

    case "moltiplicazione":
        risultato = primoNumero * secondoNumero
        break;

    case "divisione":
        risultato = primoNumero / secondoNumero

    default:
        risultato = "sembra che hai inserito un'operazione sconosciuta"
}

/* if (operazione === "addizione") {

}