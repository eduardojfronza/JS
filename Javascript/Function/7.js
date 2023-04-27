// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.


let renovarCarteira = () => {
    let anoAtual = prompt("Digite o ano atual")
    let anoDeNascimento = prompt("Digite o ano do seu nascimento")
    let anoDaCarteira = prompt("Digite o ano de emissão da sua carteira")
    
    let idade = anoAtual-anoDeNascimento
    let idadeCarteira = anoAtual-anoDaCarteira
    
    if (idade> 50 && idadeCarteira >= 15) {
        console.log(true)
    }
    else if (idade > 20 && idade < 50 && idadeCarteira >= 10){
         console.log(true)
    }
    else if (idade >= 20 && idadeCarteira >= 5){
        console.log(true)
    }
    else {
        console.log(false)
    }
}
renovarCarteira()