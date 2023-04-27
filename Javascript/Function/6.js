// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

let nome = () => {
    let texto1 = prompt("Digite uma frase ou palavra")
    let texto2 = prompt("Digite uma frase ou palavra") 
    if (texto1.toUpperCase() === texto2.toUpperCase()) {
        // toLowerCase funciona tambem
        console.log(true)
    }
    else {
        console.log(false)
    }
}

nome()