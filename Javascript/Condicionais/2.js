// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let turno = prompt("Em qual turno você estuda? M (matutina), V(Vespertino), N(noturno)")

if (turno === "M") {
    console.log("Bom dia")
} else if (turno === "V") {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}