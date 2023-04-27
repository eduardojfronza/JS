// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.
function idadeEmAnos () {
    let anoAtual = prompt("Escreva o ano atual")
    let anoNascimento = prompt("Escreva o ano de nascimento")
    let idade = anoAtual-anoNascimento
    console.log(`Sua idade é ${idade} anos`)
}
idadeEmAnos()