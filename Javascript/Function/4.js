// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.
let nome = () => {
    let texto1 = prompt("Digite uma frase ou palavra")
    let texto2 = prompt("Digite uma frase ou palavra") 
    if (texto1.length === texto2.length) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
nome()