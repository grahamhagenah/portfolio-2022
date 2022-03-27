import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;
    --grey: #efefef;
    --blue: #e0eaf1;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 1rem 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .arrow {
    padding: 0 4px;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    display: inline;
    transition: 1s;
  }

  a {
    color: var(--black);
    text-decoration: none;
    cursor: pointer;
  }

  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;