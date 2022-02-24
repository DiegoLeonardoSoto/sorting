import React from 'react'
import styledComponents from 'styled-components'
import ColorBoxComponent from './ColorBoxComponent';


function ColorComponent() {


let setValues = () => {
    setTimeout(() => {
        document.getElementsByClassName('selectorBox')[0].lastChild.style.backgroundColor = "#000"
    }, 1000);
}


return (
    <ColorComponentStyled >
    <div className='black-t-i'></div>
        <p className='sub-title'>Color</p>

        <div className="colors-content" onLoad={setValues()}>

            <ColorBoxComponent backgroundColor={'rgb(50, 163, 217)'} id={0}/>

            <ColorBoxComponent backgroundColor={'rgb(185, 72, 125)'} id={1} />

            <ColorBoxComponent backgroundColor={'rgb(75, 70, 147)'} id={2} />

            <ColorBoxComponent backgroundColor={'rgb(237, 197, 121)'} id={3} />

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