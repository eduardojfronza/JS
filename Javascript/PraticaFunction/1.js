// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const objeto = {
    nome: 'Eduardo',
    listaDeCompras: ['arroz','feijão','carne']
}
const novoObjeto = {
    ...objeto,
    NovalistaDeCompra: objeto.listaDeCompras = ['pizza','hambugurguer','churrasco']
}

function imprime(props) {
    console.log(`Olá ${props.nome}. Hoje seus itens  prioritários na lista de comprar são ${props.novaListaDeCompras}`)

   
}

imprime(novoObjeto)