
// 5. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

let genero = prompt("Qual o genero do filme?")
let preco = Number(prompt("Qual o preco do ingresso?"))

if ((genero === "FANTASIA" || genero === "Fantasia" || genero === "fantasia") && preco < 15) {
    let comida = prompt("Qual lanche vai comprar? (pipoca, chocolate, doces, etc")
    let a = true;
    if (a===true) {
        console.log(`Bom filme! Aproveite seu ${comida}`)
    }
} else {
    console.log("Escolha outro filme :(")
}

