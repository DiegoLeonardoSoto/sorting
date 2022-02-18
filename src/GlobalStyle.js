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

.sub-title{
    text-align: left;
    padding-top: .5rem;
    padding-left: 1rem;
    font-size: 1.5rem;
    text-decoration: underline;
}

// triangulo inferior izquierdo
.black-t-i{
    position: absolute;
    bottom: 0;
    left: 0;

    width: 0;
    height: 0;

    border-right: 1.5rem solid transparent;
    border-top: 1.5rem solid transparent;
    border-left: 1.5rem solid #000;
    border-bottom: 1.5rem solid #000;
}



//triangulo superior derecho
.black-t-s{
    position: absolute;
    top 0;
    right: 0;

    width: 0;
    height: 0;
    border-left: 1.5rem solid transparent;
    border-bottom: 1.5rem solid transparent;
    border-right: 1.5rem solid #000;
    border-top: 1.5rem solid #000;
}

.white-t-i{
    position: absolute;
    right 0;
    bottom: 0;

    width: 0;
    height: 0;
    border-left: 1.5rem solid transparent;
    border-bottom: 1.5rem solid #fff;
    border-right: 1.5rem solid #fff;
    border-top: 1.5rem solid transparent;
}

.circle{
    position: absolute;
    right 5%;
    bottom: 5%;

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: .18rem solid #000;
}

`;

export default GlobalStyle;
