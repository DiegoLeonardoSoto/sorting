import React from 'react'
import styledComponents from 'styled-components'
import logo from '../img/logo2.png'

function NavbarComponent() {
    return (
    <NavbarComponentStyled>
        <div className="logo">
            <img src={logo} alt="logo" /> <p>Sort<span>ing</span> </p>
        </div>

        <ul className="nav-items">
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <button>Ordenar</button>
            </li>
        </ul>
    </NavbarComponentStyled>
    )
}

const NavbarComponentStyled = styledComponents.nav`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FFF;
color: #000;
padding: 1rem;

.logo{
    font-family: 'Gilroy';
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    img{
        width: 60px;
    }
    p{
        margin: 0 1rem;
    }
    span{
        font-weight: bold;
    }
}

.nav-items{
    font-family: 'Oswald';
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    li{
        margin: 0 2.5rem;

        button{
            color: #FFF;
            font-size: 1.5rem;
            font-family: inherit;
            background-color: #000;
            padding: .6rem 2rem;
            border-radius: 70px;
            cursor: pointer;
            border: none;
        }
    }

}


`
;

export default NavbarComponent