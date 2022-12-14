import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    body {
        background: ${({ theme }) => theme.colors.mainBg};
        color: ${({ theme }) => theme.colors.darkText};
    }
`

export default GlobalStyles