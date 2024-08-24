import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Monument Grotesk';
    src: url('../monument-grotesk/MonumentGrotesk-Regular.woff2') format('woff2'),
         url('../monument-grotesk/MonumentGrotesk-Regular.woff') format('woff'),
         url('../monument-grotesk/MonumentGrotesk-Regular.ttf') format('truetype'),
         url('../monument-grotesk/MonumentGrotesk-Regular.eot');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Monument Grotesk';
    src: url('../monument-grotesk/MonumentGrotesk-Bold.woff2') format('woff2'),
         url('../monument-grotesk/MonumentGrotesk-Bold.woff') format('woff'),
         url('../monument-grotesk/MonumentGrotesk-Bold.ttf') format('truetype'),
         url('../monument-grotesk/MonumentGrotesk-Bold.eot');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Monument Grotesk';
    src: url('../monument-grotesk/MonumentGrotesk-Medium.woff2') format('woff2'),
         url('../monument-grotesk/MonumentGrotesk-Medium.woff') format('woff'),
         url('../monument-grotesk/MonumentGrotesk-Medium.ttf') format('truetype'),
         url('../monument-grotesk/MonumentGrotesk-Medium.eot');
    font-weight: 100;
    font-style: Medium;
  }
  @font-face {
    font-family: 'Monument Grotesk';
    src: url('../monument-grotesk/MonumentGrotesk-Medium.woff2') format('woff2'),
         url('../monument-grotesk/MonumentGrotesk-Medium.woff') format('woff'),
         url('../monument-grotesk/MonumentGrotesk-Medium.ttf') format('truetype'),
         url('../monument-grotesk/MonumentGrotesk-Medium.eot');
    font-weight: 300;
    font-style: Medium;
  }
  @font-face {
    font-family: 'Monument Grotesk';
    src: url('../monument-grotesk/MonumentGrotesk-BoldItalic.woff2') format('woff2'),
         url('../monument-grotesk/MonumentGrotesk-BoldItalic.woff') format('woff'),
         url('../monument-grotesk/MonumentGrotesk-BoldItalic.ttf') format('truetype'),
         url('../monument-grotesk/MonumentGrotesk-BoldItalic.eot');
    font-weight: 700;
    font-style: italic;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Monument Grotesk', sans-serif;
    box-sizing: border-box;
    background-color: #ffffff;
  }
  
  * {
    box-sizing: inherit;
  }

  @media (max-width: 1200px) {
    body {
      font-size: 16px;
    }
  }

  @media (max-width: 992px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }

  @media (max-width: 360px) {
    body {
      font-size: 8px;
    }
  }
`;

export default GlobalStyle;
