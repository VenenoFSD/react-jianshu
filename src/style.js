import { createGlobalStyle  } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
  a {
    text-decoration: none;
  }
  @font-face {
    font-family: "iconfont";
    src: url('./static/iconfont/iconfont.eot?t=1550023064242'); /* IE9 */
    src: url('./static/iconfont/iconfont.eot?t=1550023064242#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQgAAsAAAAACGgAAAPTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEKINiATYCJAMQCwoABCAFhG0HQxtPB8gOJUHBwGCAoQBABF9j7PfdHSKaXKpHk+kmjdBoJCiNEinlW0iioTLvb2ZOzDMzuPZEZZWJIYGjRh9NJ2IKZfMv1T87OGa8srZhns3mktEaCTga8MA6cY1PDxiA+IvsrkAs8jKBWoN6ctuqrNcBX4U5KxAPAk8B34xOaSCFamVlxcYiXoGX6vTsfhvwEvx9/KENX5KKzFy4f1XBguLv0e/HeIz/Px4M8Axg9ngW8NvImAIU4qbSdsYjik3xUKtmeloBVFs/SXyPfkO+H/P/PxHsRVZNZPr+4yWikimrx5ileOZ7tMNL5CRmEvwaUyDBC9FXu6O8NwD8Bya2nyRZx0drYEZmsnhJNbpcBlnWKYpeVZv0RXSapKrGRbI8Srd4ceTiaMPSlTHLltkVUZ123s10yfVAyfiqDP/IpdFLE1Q2jelPKL0S6kctWTHguDyz0uUqje3n27oyxsjE+lJpZG744ujOZ5SKK2qTqhqWYkmn9ocvAYqsX/uRWbK+5+nm5sVHjEtk3eLlGdsU7xBZJz+OXXxdvX5ROx5Ul/WyvN4NeyqfPNZbakXBi6rAmNmEN6/B/6WzPU6e9EDi2ZSDRclXg6yF0bF89AjNsct80qErPToL2qOXO846EVyWMM/vd2W33tO8W3z3OjQeQ8Yv/lPsTdEbW8n6XnsCWuGPxrzr49oe+eDqYd22wfFMYFm42GSeE2XSHFt+JW9EslB69LDl0uX8/Ldn7lPbgvsXjX01MsTeQPRe5t7fq1fvUWD/qbQCb7cH5hio2J40+ezv96EdL1ezJ3R7JU12/bxZidAz1nuoe9sg9n7/obG4yxGyvFM3YAfwcTGf9SgBgPzk4SUmcD7lMf6nT9J9FKgfHJL/2zfgqvu+zVi5PPB84AJgcvDn+GD+L+YD24omNPWlKCKHpzuK+96RhFrLyI9N0erlGIoOcCGhWkcCSZUByKoNIQpmCirUWYJK1Vah1qSq7XXaSDxEqcGEKQhCs32QNHqHrNkdRMG8gAqdPkOl5vCAWqcRcWCdkRD8yyREYcRCegQUGNHG2UbsHxa3It5poaS0MKAYkOQQglBDpOaTVciGpDGWOIbyWow5yEmiFVai65DFIkK7JJoQg4k2jO25JMlVfYhgRCvwt0mCUDCEBdFGgAQMkQ3n9cb8C7/fCuE5WVCkhqoqqwEicRAGhzQIqQBElcwGqrqWWxyG4mlhGAfiSERWUCWyIBYrJoLs1eNMEAZGaOsRsctFkm4cVEbMr7A+QC5fh/mGEilylKhQ+Sg6HU7R2yRQIynBZ4TTSom0AAAA') format('woff2'),
    url('./static/iconfont/iconfont.woff?t=1550023064242') format('woff'),
    url('./static/iconfont/iconfont.ttf?t=1550023064242') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./static/iconfont/iconfont.svg?t=1550023064242#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;