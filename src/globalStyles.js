import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Baloo+2'); */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    background: #EEE;
    /* font-family: 'Baloo 2', sans-serif; */
  }
`;
 
export default GlobalStyle;