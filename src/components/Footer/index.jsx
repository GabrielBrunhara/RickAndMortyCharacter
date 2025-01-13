import * as Styled from './style';

const Footer = () => (
  <Styled.Footer>
    <Styled.Content>
      <p>
        &copy; 2025 Gabriel Brunhara. All Rights Reserved. Data powered by{' '}
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">
          Rick and Morty API
        </a>
        .
      </p>
    </Styled.Content>
  </Styled.Footer>
);

export default Footer;
