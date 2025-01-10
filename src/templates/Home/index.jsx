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
import { loadCharacters } from '../../utils/load-posts';

export const Home = () => {
  // Estados
  const [dark, setDark] = useState(true);
  const [allCharacters, setAllCharacters] = useState([]);
  const [page, setPage] = useState(0); // Página atual
  const [charactersPerPage] = useState(5); // Número de personagens por página
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Tema
  const theme = dark ? darkTheme : lightTheme;

  // Filtro e paginação
  // Filtra personagens baseados no valor de busca ou exibe todos
  const allFilteredCharacters = searchValue
    ? isNaN(searchValue)
      ? allCharacters.filter((character) => character.name.toLowerCase().includes(searchValue.toLowerCase()))
      : allCharacters.filter((character) => character.id === Number(searchValue))
    : allCharacters;

  // Pagina os resultados filtrados com base na página atual
  const currentCharacters = allFilteredCharacters.slice(page, page + charactersPerPage);

  // Determina se não há mais páginas disponíveis
  const noMorePages = page + charactersPerPage >= allFilteredCharacters.length;

  // Funções de Manipulação

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
    setAllCharacters(allLoadedCharacters);
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
    if (random) {
      const randomId = Math.floor(Math.random() * allCharacters.length);
      setSearchValue(randomId);
    } else {
      window.scrollTo(0, 0);
      setSearchValue('');
      setPage(0);
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
      {/* Navbar */}
      <Navbar handleRandom={handleRandom} handleThemeToggle={handleThemeToggle} dark={dark} />
      <Styled.Container>
        {/* Barra de Pesquisa */}
        <Search
          placeholder="Search characters"
          value={searchValue}
          onChange={handleChange}
          onFocus="Type something..."
        />

        {/* Conteúdo Principal */}
        {isLoading ? (
          <Styled.LoadingContainer>
            <Loading />
          </Styled.LoadingContainer>
        ) : currentCharacters.length > 0 ? (
          <Posts posts={currentCharacters} size={currentCharacters.length} />
        ) : (
          <Styled.Message>No results for: "{searchValue}"</Styled.Message>
        )}

        {/* Paginação */}
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
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
};
