import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
  html, body {
    font-family: 'Roboto', sans-serif;
    color: ${p => p.color};
    margin: 0;
  }
`;

export default GlobalStyle;
