import React, {useContext} from 'react'
import styledComponents from 'styled-components'
import { DataContext } from '../context/DataContext';

function ColorBoxComponent({backgroundColor , id }) {

    const {colorSelected,setColorSelected} = useContext(DataContext);

let onClickFunction = () => {
    
    let thisColorBox = document.getElementsByClassName('selectorBox')[id]; //.lastChild.style.backgroundColor = "#000";
    if (thisColorBox.style.backgroundColor != colorSelected){
        document.getElementsByClassName('selectorBox')[colorSelected[0]].lastChild.style.backgroundColor = "#fff";
        setColorSelected([id,thisColorBox.style.backgroundColor]);
        document.getElementsByClassName('selectorBox')[id].lastChild.style.backgroundColor = "#000";
    }else{
        console.log("no entra");
    }

}

return (
    <ColorBoxComponentStyled>
        <div className="color selectorBox" style={{backgroundColor: `${backgroundColor}` }} onClick={onClickFunction}>
            <div className='black-t-s'></div>
            <div className='black-t-i'></div>
            <div className="white-t-i-d"></div>
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