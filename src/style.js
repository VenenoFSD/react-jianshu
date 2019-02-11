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
    src: url('./static/iconfont/iconfont.eot?t=1549893592584'); /* IE9 */
    src: url('./static/iconfont/iconfont.eot?t=1549893592584#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMoAAsAAAAABvQAAALaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBWIFiATYCJAMMCwgABCAFhG0HOhssBhEVlC1kHwm5adKPrGGBJppovImAWvv8np25DRCCAyKVOheXKCZJRyouH3X022/u/TS0LKMHJfndWBKqQq7l9OVyA8duRky4+ckpdsBCzue5HN8COpC76gPlMsd4PiZggoHugVGUaIEk6C3Da11KB3WfgKpa6i6Mnzh9vsoSsiwgbN+yaY3KubgkqaXKgrxmbxKuKlI5O5c940r4/fC/vqEymaKIrJ29ccJ6o/8a/atXPFo4arnvdHE+L9RDRHRHIqyszS8WBZWNqupTe20uCbK5UoUCodzR5vQPj0wg5EhzddAZFzL+asjlqaEXKO+6OYI8bhiODYi5/thLQ93qLXd9+Ngue98qed0ofdss/1heMGptVhJpt+HcktfNe/+vu1Xc/eXs2TcfLbpVMv/m3QH3S30JXl/yOX7za/n9nXfU5FRcUnItMumtpF1MLaWlsG7JoV7N/vrdKNy+GG+fR6S5UqSgTt9mwvQTJ1//+bd2+4+T1z+b/2Bvn8HTr1xo3jo1zg9mm1eu/7Z/sPH+To96je/QxWpQeB9fx5mwuD++iCd/+jc2Pfy/5apaw/9UrpZAxZniCogW9if9Gqkso7fivyp6DiVHRRwxWXIu94JRy5HeDJBqIQUkXNev8eYG9+4NKucUKjKVtEBUWXsiMd1RpJr+yFU2ClV1M+lwNaZ6WFtIVWhMuEQIartBpqY3iGp7IRLzhyIN/SNXO7RR1cIwdGY1HUM6OMfoC0YQHEMaUqWYSwaj1jWMTeFzVhVyW8g6TYFrOcXSElbIc2zQB7EnokAxlbCIHsOiIKiZMgzFSkTqrm2ruhdZIZWNQeMw5BMoAgLHQCpEKsqfLAZLn1+DYkbBxy1tbfEtiGnp9MBlcXoQS/qqV9u9PKMdiHmEUIDCSAksIi8qaJ6Aun5WBoWEJRmRrXXZeJzqq7fWN5YfUKZ2Qa5vhyzEkOT7yGhDfcem9ClIGw0AAA==') format('woff2'),
    url('./static/iconfont/iconfont.woff?t=1549893592584') format('woff'),
    url('./static/iconfont/iconfont.ttf?t=1549893592584') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./static/iconfont/iconfont.svg?t=1549893592584#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;