import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    outline:none;

    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  html, body, #__next {
    height: 100%;
  }

  body, input, button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`
