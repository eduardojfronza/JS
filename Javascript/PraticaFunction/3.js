// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
//     - 💡  Dica
        
//       Aqui você deve usar o método **push()**
        
//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

const carrinho = []

const maca = {
    nome: 'Maca',
    disponibilidade: true
}
const uva = {
    nome: 'Uva',
    disponibilidade: true
}
const pera = {
    nome: 'Pera',
    disponibilidade: true
}

function imprime(fruta) {
    carrinho.push(fruta)
}

imprime(maca)
imprime(pera)
imprime(uva)

console.log(carrinho)

