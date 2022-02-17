import React from 'react'
import styledComponents from 'styled-components'
import background from '../img/retro_computer-2.jpg'

function Header() {
    return (
    <HeaderStyle>
        <div className="left-content">
            <div className="left-content-text">
                <h2>Algoritmos de</h2>
                <h1>ORDENAMIENTO</h1> 

                <p>Como usarlos y entenderlos</p>

                <button className='primaryButton'>ORDENAR ARREGLO</button>
            </div>
        </div>
        
        <div className="right-content" style={{backgroundImage: `url(${background})` }}>

        </div>
    </HeaderStyle>
    )
}

const HeaderStyle = styledComponents.div`
display: flex;
.left-content{
width: 40%;
}

.left-content{
    font-family: 'Gilroy';
    display: flex;
    align-items: center;
    padding-left: 3rem;
    h2{
        font-weight: 500;
        font-size: 4rem;
    }
    h1{
        font-family: 'Oswald';
        font-size: 4.5rem;
        font-weight: 400;
    }
    p{
        padding: 1rem 0;
        font-size: 2.4rem;
        padding-bottom: 4rem;
    }

}

.right-content{
    width: 60%;
    overflow: hidden;
    height: 90vh;
    background-position: left;
    background-size: cover;
}
`;

export default Header