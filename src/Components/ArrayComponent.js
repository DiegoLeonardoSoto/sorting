import React, {useContext} from 'react'
import styledComponents from 'styled-components'
import { DataContext } from '../context/DataContext';

function ArrayComponent() {

const {colorSelected,rangeContext} = useContext(DataContext);

const newArray = () => {
    let cont = document.getElementById('rectangles');
    let aux = 0;
    let aux2 = 97/(rangeContext-1);

    if (!cont.hasChildNodes()) {
        for (let i = 0; i < rangeContext; i++) {
            let newRectangle = document.createElement('div');
            newRectangle.innerHTML = "";
            newRectangle.classList.add("rectangle");
            newRectangle.style.height = "0%";
            newRectangle.style.backgroundColor = colorSelected[1];
            newRectangle.style.left= aux+"%";
            cont.appendChild(newRectangle);
            newRectangle.animate([
                {height: "0%"},
                {height: (Math.floor(Math.random()* 100)+1)+"%"}
            ],{
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards'
            });
            aux = aux + aux2;
        }
    } else {
        cont.innerHTML = "";
        return newArray();
    }
}

const disarray = () => {
    let rectangle = document.getElementsByClassName("rectangle");
    console.log(rectangle);
}

const burble = () => {
    // let rectangles1 = document.getElementsByClassName('rectangle')[0];
    // let rectangles2 = document.getElementsByClassName('rectangle')[1];

    // let rec1left = rectangles1.style.left;
    // let rec2left = rectangles2.style.left

    // rectangles1.animate([
    //     {left: rec1left},
    //     {left: rec2left}
    // ],{
    //     duration: 500,
    //     easing: 'ease-in-out',
    //     fill: 'forwards'
    // });
    
    // rectangles2.animate([
    //     {left: rec2left},
    //     {left: rec1left}
    // ],{
    //     duration: 500,
    //     easing: 'ease-in-out',
    //     fill: 'forwards'
    // });
}

return (
    <ArrayComponentStyled>
    <div className='black-t-i'></div>

    <div className="array-content">
        <div className="left">
            <p className='sub-title'>Arreglo</p>
            <button className='primaryButton ' onClick={newArray}>NUEVO ARREGLO</button>
            <button className='secondaryButton' onClick={disarray}>DESORDENAR</button>
        </div>

        <div className="right">
            <div className="white-t-i-i"></div>

                <div className="content-rectangle">
                    <div id="rectangles">

                    </div>
                </div>

            <div className="white-t-s-d"></div>
        </div>

        <div className="buttons">
            <div className="left-buttons">
                <p className='sub-title sort-subtitle'>ORDENAMIENTOS</p>
            </div>
            
            <div className="right-buttons">
                <button className='secondaryButton sortButton' onClick={burble}>BURBUJA</button>
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
        align-items: center;

        .content-rectangle{
            position: relative;
            margin: 0 auto;
            display: flex;
            width: 88%;

            #rectangles{
                width: 100%;
                height: 20rem;
                display: flex;
                justify-content: space-around;
                align-items: flex-end;
                position: relative;

                .rectangle{
                    width: 3%;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
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