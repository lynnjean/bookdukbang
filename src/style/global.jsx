import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    html{
        font-size: 62.5%;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    body{
        font-size: 1.6rem;
        line-height: 1.4;
        background-color: ${({ theme }) => theme.bgsubColor};
        transition: all 0.2s;
    }

    input, button{
        font-family: inherit;
        font-size: inherit;
    }

    button{
        cursor: pointer;
    }

    img{
        vertical-align: top;
    }
`;
export default GlobalStyle;
