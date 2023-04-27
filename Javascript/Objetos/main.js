const filme = {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    ano: 1972,
    genero: ["Crime", "Drama"],
    duracao: 175,
    atores: ["Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano"],
    sinopse: "A história de uma poderosa família da máfia italiana nos Estados Unidos, que busca manter sua posição de poder após a chegada de novas forças policiais e criminosas.",
    classificacao: 18,
    premios: {
      oscars: 3,
      globoDeOuro: 5,
      outros: 19
    },
    assistido: false
  };

  console.log(`O filme ${filme.titulo} tem como diretor o ${filme.diretor} e estreiou no ano de ${filme.ano}. O filme é do genero ${filme.genero[0]} e ${filme.genero[1]} com uma duração de ${filme.duracao}.\n\n A sinopse do filme é: ${filme["sinopse"]} Os atores do filmes são: ${filme.atores}. \n\n O filme ja ganhou ${filme.premios["oscars"]} oscars, ${filme.premios["globoDeOuro"]} globoDeOuro e ${filme.premios["outros"]} outros. `)
