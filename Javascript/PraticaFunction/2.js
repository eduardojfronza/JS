// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
        
//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

const U1 = {
    nome: 'Eduardo',
    idade: 17,
    profissão: 'Dev'
}

const U2 = {
    nome: 'Dudu',
    idade: 25,
    profissão: 'Engenheiro'
}

function imrpime(props1,props2){
 console.log(`${props1.nome} e ${props2.nome}\n${props1.nome} tem ${props1.nome.length} caracteres e ${props2.nome} tem ${props2.nome.length} caracteres.\n${props1.nome} tem ${props1.idade} anos e ${props2.nome} tem ${props2.idade} anos \n${props1.nome} é ${props1.profissão} e ${props2.nome} é ${props2.profissão}\nO(A) ${props1.profissão} tem ${props1.profissão.length} caracteres e ${props2.profissão} tem ${props2.profissão.length}`)
}
imrpime(U1,U2)