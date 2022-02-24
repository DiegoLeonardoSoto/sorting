import React, {useContext} from 'react'
import styledComponents from 'styled-components'
import { DataContext } from '../context/DataContext';

function SizeComponent() {

    const {rangeContext, setRangeContext} = useContext(DataContext);
    
    //se crea un arreglo con cada porcentaje del width del div "progressBar" para cada valor del input range
    let min1 = 17;//porcentaje inicial, en valor 5 => width: 17%;
    let aux2 = 5.3;
    let porcentajesProgressBar = {};
    for (let i = 5; i <= 20; i++) {
        porcentajesProgressBar[i]= min1;
        min1=min1 + aux2;
    }
    
    const setValueSpan = (a) => {
        const progressBar = document.getElementById("progressBar");
        progressBar.style.width = porcentajesProgressBar[a] + "%"

        setRangeContext(a);
    }

return (
    <SizeComponentStyled>
    <div className='black-t-i'></div>
        <p className='sub-title'>Tamaño: </p> <span className='sub-title-number'>{rangeContext}</span>
            <div className="input-content">

                <div className="sliderValue">
                    {/* <span id="valueSpan">{rangeContext}</span> */}
                </div>

                <div className="field">
                        <div className="value left">5</div>
                        <input type="range" name="input-range" id="inputRange" min="5" max="20" steps="1" onChange={(e) => {setValueSpan(e.target.value)}}  />
                        <div id="progressBar"></div>
                        <div className="value right">20</div>
                </div>
        </div>
    <div className='black-t-s'></div>
    </SizeComponentStyled>
)
}

const SizeComponentStyled = styledComponents.div`
width: 40%;
height: 14rem;
background-color: #FFF;
margin-right: 2rem;

position:relative;

.sub-title-number{
  font-size: 2rem;
}

.input-content{

    .sliderValue{
        position: relative;
        width: 100%;

        span{
        position: absolute;
        height: 2.5rem;
        width: 2.5rem;
        color: #FFF;
        transform: translateX(-50%) scale(0);
        transform-origin: bottom;
        transition: transform 0.3s ease-in-out;
        line-height: 2.5rem;
        z-index: 2;
        left: 69.5%;
        }


    }

    .field{
    display: flex;
    align-items: center;
    justify-content: center;

        .value{
            position: absolute;
                font-size: 1.3rem;
        }

        .right{
            right: -2rem;
        }
            
        .left{
            left: -2rem;
        }
            
        #progressBar{
            width: 100%;
            height: 24px;
            background: #000;
            border-radius: 14px;
            position: absolute;
            top: 10;
            left: 0;
            z-index: 2;
        }

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25%;
    margin-top: -3%;
    width: 50%;
}

// estilos del input range
input[type=range] {
    width: 100%;
    margin: 5.5px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    background: #ffffff;
    border: 0.2px solid #010101;
    border-radius: 13.1px;
    width: 100%;
    height: 24px;
    cursor: pointer;
  }
  input[type=range]::-webkit-slider-thumb {
    margin-top: -5.7px;
    width: 35px;
    height: 35px;
    background: #ffffff;
    border: 1.1px solid #000000;
    border-radius: 35px;
    cursor: pointer;
    z-index: 3;
    position: relative;
    -webkit-appearance: none;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ffffff;
  }
  input[type=range]::-moz-range-track {
    background: #ffffff;
    border: 0.2px solid #010101;
    border-radius: 13.1px;
    width: 100%;
    height: 24px;
    cursor: pointer;
  }
  input[type=range]::-moz-range-thumb {
    width: 35px;
    height: 35px;
    background: #ffffff;
    border: 1.1px solid #000000;
    border-radius: 35px;
    cursor: pointer;
    z-index: 3;
    position: relative;
  }
  input[type=range]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 5.5px 0;
    color: transparent;
    width: 100%;
    height: 24px;
    cursor: pointer;
  }
  input[type=range]::-ms-fill-lower {
    background: #ffffff;
    border: 0.2px solid #010101;
    border-radius: 26.2px;
  }
  input[type=range]::-ms-fill-upper {
    background: #ffffff;
    border: 0.2px solid #010101;
    border-radius: 26.2px;
  }
  input[type=range]::-ms-thumb {
    width: 35px;
    height: 35px;
    background: #ffffff;
    border: 1.1px solid #000000;
    border-radius: 35px;
    cursor: pointer;
    margin-top: 0px;
    z-index: 3;
    position: relative;
    /Needed to keep the Edge thumb centred/
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #ffffff;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #ffffff;
  }
  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
  how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align:auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    input[type=range] {
      margin: 0;
      /Edge starts the margin from the thumb, not the track as other browsers do/
    }
  }
`;

export default SizeComponent