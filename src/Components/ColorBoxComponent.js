import React from 'react'
import styledComponents from 'styled-components'

function ColorBoxComponent({backgroundColor , id }) {



return (
    <ColorBoxComponentStyled>
        <div className="color" style={{backgroundColor: `${backgroundColor}` }}>
            <div className='black-t-s'></div>
            <div className='black-t-i'></div>
            <div className="white-t-i"></div>
            <div className="circle"></div>
        </div>
    </ColorBoxComponentStyled>
)
}

const ColorBoxComponentStyled = styledComponents.div`
    width: 8rem;
    height: 8rem;
    background-color: #000;
    display: flex;
    align-items: center;
    cursor: pointer;

    .color{
        width: 7.1rem;
        height: 7.1rem;
        margin: 0 auto;
        position: relative;

        .black-t-s{
            border-left: 1rem solid transparent;
            border-bottom: 1rem solid transparent;
            border-right: 1rem solid #000;
            border-top: 1rem solid #000;
        }

        .black-t-i{
            border-right: 1rem solid transparent;
            border-top: 1rem solid transparent;
            border-left: 1rem solid #000;
            border-bottom: 1rem solid #000;
        }
    }

`;

export default ColorBoxComponent