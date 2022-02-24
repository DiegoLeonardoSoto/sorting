import React, {useContext} from 'react'
import styledComponents from 'styled-components'
import { DataContext } from '../context/DataContext';

function ArrayComponent() {

const {colorSelected,setColorSelected,rangeContext, setRangeContext} = useContext(DataContext);

const newArray = () => {
    alert("color actual: "+colorSelected[1]+" tamaño actual: "+rangeContext)
}

return (
    <ArrayComponentStyled>
    <div className='black-t-i'></div>

    <div className="array-content">
        <div className="left">
            <p className='sub-title'>Arreglo</p>
            <button className='primaryButton ' onClick={newArray}>NUEVO ARREGLO</button>
            <button className='secondaryButton '>DESORDENAR</button>
        </div>

        <div className="right">
            <div className="white-t-i-i"></div>

                <div className="content-rectangle">
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                    <div className="rectangle primerRect"></div>
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                    <div className="rectangle"></div>
                </div>

            <div className="white-t-s-d"></div>
        </div>

        <div className="buttons">
            <div className="left-buttons">
                <p className='sub-title sort-subtitle'>ORDENAMIENTOS</p>
            </div>
            
            <div className="right-buttons">
                <button className='secondaryButton sortButton'>BURBUJA</button>
                <button className='secondaryButton sortButton'>RAPIDO</button>
                <button className='secondaryButton sortButton'>INSERCION</button>
                <button className='secondaryButton sortButton'>MEZCLA</button>
            </div>
        </div>
    </div>

    <div className='black-t-s'></div>
    </ArrayComponentStyled>
)
}

const ArrayComponentStyled = styledComponents.div`
width: 100%;
height: 30rem;
background-color: #FFF;
position: relative;
display: flex;
align-items: center;

.array-content{
    width: 97%;
    height: 95%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .primaryButton, .secondaryButton{
        font-size: 1.2rem;
        width: 90%;
        padding: 1rem;
        margin-top: 1.3rem;
    }

    .left{
        width: 20%;
        height: 85%;
        // background-color: blue;
        .primaryButton{
            border: 3px solid #000;
        }
    }

    .right{
        width: 77%;
        height: 80%;
        background-color: #747373;
        position: relative;
        margin: 0 auto;
        display: flex;
        align-items: flex-end;

        .content-rectangle{
            position: relative;
            margin: 0 auto;
            padding-bottom: 20px;
            display: flex;
            width: 88%;
            justify-content: space-around;
            align-items: flex-end;

            .rectangle{
                width: 1.3rem;
                height: 20rem;
                background-color: rgba(50, 163, 217);
            }

            .primerRect{
                height: 1rem;
                background-color: rgba(50, 163, 217,.5);
            }
        }

    }

    .buttons{
        width: 100%;
        height: 15%;
        // background-color: red;
        display: flex;

        .sortButton{
            width:10rem;
            height: 3.7rem;
            margin: 0;
        }

        .left-buttons{
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;
            .sort-subtitle{
                padding-top:0;
                margin: 0 auto;
                position: relative;
            }
        }

        .right-buttons{
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
}



`;

export default ArrayComponent