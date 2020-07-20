import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower|Roboto+Mono|Baloo+2&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html {
    /* font-size: 90%; */
    background-color: #ebebeb;

  }

  /* html, body {
    height: 100%;
  } */

  body {
    font-family: 'Baloo 2', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`

export default GlobalStyles
