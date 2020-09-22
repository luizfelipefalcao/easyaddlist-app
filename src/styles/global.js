import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }


  html {
    /* font-size: 90%; */
    background-color: #ebebeb;

  }

  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`

export default GlobalStyles
