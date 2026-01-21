
function calculoRank(vitorias, derrotas) {
    return vitorias - derrotas;
}

let totalPartidas = calculoRank(40, 15);

if (totalPartidas == 0) {
    console.log("Voce ainda não possui um nivel");
} else if (totalPartidas < 1000) {
    console.log("O player tem o saldo de " + totalPartidas + " e o nivel é Ferro");
} else if (totalPartidas >= 1001 && totalPartidas < 2000) {
    console.log("O player tem o saldo de " + totalPartidas + " e o nivel é Bronze");
} else if (totalPartidas >= 2001 && totalPartidas < 5000) {
    console.log("O player tem o saldo de " + totalPartidas + " e o nivel é Prata");
} else if (totalPartidas >= 5001 && totalPartidas < 7000) {
    console.log("O player tem o saldo de " + totalPartidas + " e o nivel é Ouro");
} else if (totalPartidas >= 7001 && totalPartidas < 8000) {
    console.log("O player tem o saldo de " + totalPartidas + " e o nivel é Platina");
} else if (totalPartidas >= 8001 && totalPartidas < 9000) {
    console.log("O player tem o saldo de " + totalPartidas + " e o nivel é Ascendente");
} else if (totalPartidas >= 9001 && totalPartidas < 10000) {
    console.log("O player tem o saldo de " + totalPartidas + " e o nivel é Imortal");
} else if (totalPartidas >= 10001) {
    console.log("O player tem o saldo de " + totalPartidas + " e o nivel é Radiante");
}
