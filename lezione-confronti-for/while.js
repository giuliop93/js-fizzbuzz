var lista = [
    'latte',
    'cacao',
    'insalata',
    'carote',
    'pomodori',
    'piatti pronti'
];

var i = 0;
var containerList = document.getElementById('container_list'),

do {
    if (lista[i]) {
        containerList.innerHTML += "<li>" +lista
    }
}


while (i < lista.lenght) {
    containerList.innerHTML += "<li>" + lista[i] + "<li>";

    i++
}

containerList.innerHTML += "<li>- fine while</li>"