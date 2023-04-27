// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

let nome = prompt("Digite seu nome");
let idade = Number(prompt("Digite sua idade"));
let profissao = prompt("Digite sua profissão");
questionFromUser(nome,idade,profissao)

function questionFromUser (x,y,z) {
   const informationOfUser = {
        name: x,
        age: y,
        profition: z
   }    
   console.log(informationOfUser, typeof(informationOfUser))
    
}



