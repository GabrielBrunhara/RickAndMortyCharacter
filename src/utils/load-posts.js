export const loadCharacters = async () => {
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  let allCharacters = []; // Array para armazenar todos os personagens
  let nextPage = apiUrl; // URL inicial

  // Loop para buscar todas as páginas
  while (nextPage) {
    const response = await fetch(nextPage);
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }

    const data = await response.json();

    // Adiciona os personagens da página atual ao array principal
    allCharacters = allCharacters.concat(
      data.results.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin: {
          name: character.origin.name,
        },
        location: {
          name: character.location.name,
        },
        image: character.image,
      })),
    );

    nextPage = data.info.next; // Atualiza o 'next' para a próxima página
  }

  return allCharacters; // Retorna todos os personagens
};
