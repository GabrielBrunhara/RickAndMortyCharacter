import { ThemeProvider } from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

// Estilos
import * as Styled from './style';
import GlobalStyle from '../../styles/globalStyle';
import { lightTheme, darkTheme } from '../../styles/theme';
// Componentes
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { Search } from '../../components/Search/';
import { Loading } from '../../components/Loading';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// Utilitários
import { loadCharacters, loadLocations } from '../../utils/load-posts';
import Menu from '../../components/Menu';

export const Home = () => {
  // Estados
  const [isChecked, setIsChecked] = useState(false);
  const [dark, setDark] = useState(true);
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(0);
  const [charactersPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Tema
  const theme = dark ? darkTheme : lightTheme;

  // Filtro e paginação
  // Filtra personagens baseados no valor de busca ou exibe todos
  let allFilteredCharacters = searchValue
    ? isNaN(searchValue)
      ? characters.filter((character) => character.name.toLowerCase().includes(searchValue.toLowerCase()))
      : characters.filter((character) => character.id === Number(searchValue))
    : characters;

  // Pagina os resultados filtrados com base na página atual
  const currentCharacters = allFilteredCharacters.slice(page, page + charactersPerPage);

  // Determina se não há mais páginas disponíveis
  const noMorePages = page + charactersPerPage >= allFilteredCharacters.length;

  // Funções de Manipulação

  const updateFilters = (filters) => {
    let filteredCharacters = allCharacters;

    // Itera sobre cada filtro e aplica
    Object.keys(filters).forEach((filterType) => {
      const activeFilters = filters[filterType];

      if (filterType === 'location' && activeFilters) {
        // Aplica o filtro de location
        filteredCharacters = filteredCharacters.filter(
          (character) => character.location.name.toLowerCase() === activeFilters.toLowerCase(),
        );
      } else if (activeFilters.length > 0) {
        // Aplica os demais filtros
        filteredCharacters = filteredCharacters.filter((character) =>
          activeFilters.includes(character[filterType].toLowerCase()),
        );
      }
    });

    setCharacters(filteredCharacters);
  };

  //inicializa o tema
  const initializePreferences = () => {
    const savedThemePreference = localStorage.getItem('themePreference');
    if (savedThemePreference) {
      setDark(savedThemePreference === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
    }
  };

  // Carrega os personagens inicialmente
  const handleLoadCharacters = useCallback(async () => {
    setIsLoading(true);
    const allLoadedCharacters = await loadCharacters();
    const allLoadedLocations = await loadLocations();
    setAllCharacters(allLoadedCharacters);
    setCharacters(allLoadedCharacters);
    setLocations(allLoadedLocations);
    setIsLoading(false);
  }, []);

  // Avança para a próxima página
  const handleNextPage = () => {
    const nextPage = page + charactersPerPage;
    if (nextPage < allFilteredCharacters.length) {
      setPage(nextPage);
    }
  };

  // Volta para a página anterior
  const handlePreviousPage = () => {
    const previousPage = Math.max(page - charactersPerPage, 0);
    setPage(previousPage);
  };

  // Atualiza o valor de busca
  const handleChange = (event) => {
    setSearchValue(event.target.value);
    setPage(0);
  };

  // Tema aleatório ou resetado
  const handleRandom = (random) => {
    setPage(0);
    setCharacters(allCharacters);
    if (random) {
      const randomId = Math.floor(Math.random() * allCharacters.length);
      setSearchValue(randomId);
    } else {
      window.scrollTo(0, 0);
      setSearchValue('');
    }
  };

  // Troca o tema
  const handleThemeToggle = (isDark) => {
    const newTheme = isDark ? true : false;
    setDark(newTheme);
    localStorage.setItem('themePreference', newTheme ? 'dark' : 'light');
  };

  //inicializa
  useEffect(() => {
    handleLoadCharacters();
    initializePreferences();
  }, [handleLoadCharacters]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar
        updateFilters={updateFilters}
        handleThemeToggle={handleThemeToggle}
        dark={dark}
        locations={locations}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <Styled.Container>
        <Menu handleRandom={handleRandom} isChecked={isChecked} setIsChecked={setIsChecked} />

        <Search placeholder="Search" value={searchValue} onChange={handleChange} onFocus="Type something..." />

        {isLoading ? (
          <Styled.LoadingContainer>
            <Loading />
          </Styled.LoadingContainer>
        ) : currentCharacters.length > 0 ? (
          <Posts posts={currentCharacters} size={currentCharacters.length} />
        ) : searchValue ? (
          <Styled.Message>No results for: "{searchValue}"</Styled.Message>
        ) : (
          <Styled.Message>No characters match your filter criteria</Styled.Message>
        )}

        {!isLoading && (
          <>
            <Styled.ButtonContainer>
              <Button disabled={page === 0} text="←" onClick={handlePreviousPage} modifier="prev" />
              <Styled.Pages>
                <h2>
                  {(page + charactersPerPage) / charactersPerPage}/
                  {Math.ceil(allFilteredCharacters.length / charactersPerPage)}
                </h2>
              </Styled.Pages>
              <Button disabled={noMorePages} text="→" onClick={handleNextPage} modifier="next" />
            </Styled.ButtonContainer>
          </>
        )}
      </Styled.Container>
      <Footer />
    </ThemeProvider>
  );
};
