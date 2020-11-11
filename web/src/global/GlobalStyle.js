import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    font-family: Source Sans Pro;
    margin: 0 auto;
    font-weight: 400;
    font-style: normal;
    color: #2c2142;
  }

  h1 {
    font-family: Montserrat;
    font-weight: 700;
  }

  h2, h3, h4, h5, h6 {
    font-family: Montserrat;
  }

  section {
    margin-bottom: 3rem;
  }

  input, textara {
    border-color: #BBBDBF;
  }

  .form-control:focus, .form-control:active, .form-control:hover {
    box-shadow: none;
    -webkit-box-shadow: none;
    border: #2664B0 solid 1px;
  }

  @media screen and (min-width: 576px) {
    html {
      font-size: 16px;
    }
  }
  
  @media screen and (min-width: 992px) {
    html {
      font-size: 18px;
    }
  }
`;
