import { /* styled, */ createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    --primary: ${(props) => props.theme.primary};
    --secondary: ${(props) => props.theme.secondary};
    --text: ${(props) => props.theme.text};
    --secondary-text: ${(props) => props.theme.secondaryText};
    --accent: #3ab54a;

    a {
      align-items: center;
      justify-content: center;
      text-align: center;
      color: var(--primary);
      text-decoration: none;
      font-weight: 700;
      font-size: 1.5rem;
      transition: all 0.1s ease;
      border-radius: 30px;
      padding: 10px 15px;

      &:hover {
        color: var(--text);
      }
    }

  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default GlobalStyle;
