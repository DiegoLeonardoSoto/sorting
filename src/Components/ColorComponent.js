import React from 'react'
import styledComponents from 'styled-components'
import ColorBoxComponent from './ColorBoxComponent';

function ColorComponent() {

return (
    <ColorComponentStyled>
    <div className='black-t-i'></div>
        <p className='sub-title'>Color</p>

        <div className="colors-content">
            
            <div className="select">
            <ColorBoxComponent backgroundColor={'#32A3D9'} />
            </div>

            <ColorBoxComponent backgroundColor={'#89487D'} />

            <ColorBoxComponent backgroundColor={'#4B4693'} />

            <ColorBoxComponent backgroundColor={'#EDC579'} />

        </div>
    <div className='black-t-s'></div>
    </ColorComponentStyled>
)
}

const ColorComponentStyled = styledComponents.div`
width: 60%;
height: 14rem;
background-color: #FFF;

position: relative;

.colors-content{
    width: 100%;
    height: 100%;
    background-color: #FFF;
    margin-top: -2.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    .select{
        .circle{
            background-color: #000;
        }
    }
    .box{
        width: 8rem;
        height: 8rem;
        background-color: #000;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
}



`;

export default ColorComponent