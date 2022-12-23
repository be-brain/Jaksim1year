import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face {
  font-family: 'Noto Sans KR';
  font-weight: 300;
  src: url('./styles/fonts/NotoSansKR-Light.otf') format('woff2'),
    url('./styles/fonts/NotoSansKR-Light.otf') format('woff'),
    url('./styles/fonts/NotoSansKR-Light.otf') format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    src: url('./styles/fonts/NotoSansKR-Regular.otf') format('woff2'),
      url('./styles/fonts/NotoSansKR-Regular.otf') format('woff'),
      url('./styles/fonts/NotoSansKR-Regular.otf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    src: url('styles/fonts/NotoSansKR-Medium.otf') format('woff2');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 700;
    src: url('./styles/fonts/NotoSansKR-Bold.otf') format('woff2'),
      url('./styles/fonts/NotoSansKR-Bold.otf') format('woff'),
      url('./styles/fonts/NotoSansKR-Bold.otf') format('truetype');
  }

  * {
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    margin: auto;
    max-width: 1140px;
    min-width: 720px;
  }
  ul{
   list-style:none;
   }
   h3{
    margin: 0px;
   }
   a{
    text-decoration: none;
    color: #000;
    transition: 0.2s;
    &:hover{
      color: #777;
      text-decoration: underline #777;
    }
   }
`;

export default GlobalStyle;
