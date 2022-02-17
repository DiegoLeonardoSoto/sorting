import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
}

Body{
    background-color: #000;
    color: #FFF;
}

.primaryButton{
    font-family: 'Oswald';
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem 2rem;
    border-radius: 1.5rem;
    border: none;
    cursor: pointer;
}

`;

export default GlobalStyle;
