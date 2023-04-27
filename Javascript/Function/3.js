// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).
const calculaIMC = () => {
    let peso = parseFloat(prompt("Digite seu peso em Kg"))
    let altura = parseFloat(prompt("Digite seu altura em metros"))
    let IMC = peso/altura*altura
    console.log(`Seu IMC é ${IMC}`)
}

calculaIMC()