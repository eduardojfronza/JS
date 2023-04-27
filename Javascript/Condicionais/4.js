// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let genero = prompt("Qual o genero do filme?")
let preco = Number(prompt("Qual o preco do ingresso?"))


if ((genero === "FANTASIA" || genero === "Fantasia" || genero === "fantasia") && preco < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}