import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;
    --grey: #6f6f70;
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

  button {
    text-decoration: none;
    background: white;
    color: var(--black);
    border: 2px solid var(--black);
    border-radius: 5px;
    padding: 5px 20px;
    height: 100%;
    font-weight: 500;
    align-items: center;
  }

  button:hover {
    background: var(--black);
    color: white;
  }

  .mr-2 {
    margin-right: 2rem;
  }

  .mr-1 {
    margin-right: 1rem;
  }

  .ml {
    margin-left: 2rem;
  }

  h1 {
    font-size: 50px;
    font-weight: 700;
    padding: 10rem 0 8rem 0;
    max-width: 650px;
    line-height: 1.25;

    @media screen and (max-width: 700px) {
      padding: 3rem 0 5rem 0;
    }
  }

  h3 {
    font-weight: 500;
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

  .link {
    border-bottom: .05em solid #e0eaf1;
    box-shadow: inset 0 -0.05em 0 #e0eaf1;
    color: inherit;
    transition: background-color .25s cubic-bezier(.33, .66, .66, 1);
    text-decoration: none;
  }

  .link:hover, .link:focus, .link:active {
    background-color: #e0eaf1;
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