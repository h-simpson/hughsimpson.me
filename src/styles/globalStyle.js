import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    box-sizing: border-box;

    //TODO Take out of injected global styles
    @media (min-width: 770px) {
      background-color: #f6f9fc;
    }
  }
`
