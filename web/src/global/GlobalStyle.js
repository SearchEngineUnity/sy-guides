import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    font-family: rubrik-edge-new,sans-serif;
    margin: 0 auto;
    font-weight: 400;
    font-style: normal;
    color: #2c2142;
  }

  h1, h2 {
    font-weight: 700;
    font-style: normal;
  }

  h2 {
    margin-bottom: 1rem;
  }

  a {
    color: #2C2142;
    font-weight: 700;
  }
  
  a:hover {
    color: #2C2142;
    font-weight: 700;
  }
  
  a:active {
    color: #2C2142;
    font-weight: 700;
  }

  a.active {
    color: #2C2142;
    font-weight: 700;
  }
  
  a:visited {
    color: #2C2142;
    font-weight: 700;
  }

  section {
    margin-bottom: 3rem;
  }

  section:nth-child(n+2) {
    padding-top: 6.5rem;
    margin-top: -6.5rem;

    @media screen and (max-width: 991px) {
      padding-top: 18rem;
      margin-top: -18rem;
    }
  }

  hr {
    border-bottom: 1px solid #F2F2F2;
    background-color: #F2F2F2;
    margin: 0;
  }

  input, textara {
    border-color: #D4D2D9;
  }

  button:focus, a:focus {
    outline-color: #086068;
  }

  .borderdesign {
    border:2px solid #f2f2f2f2;
  }

  .leader {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .form-control:focus, .form-control:active, .form-control:hover {
    box-shadow: none;
    -webkit-box-shadow: none;
    border: #0a7b86 solid 1px;
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
