import React from 'react'
import { useState } from 'react'
import styledComponents from 'styled-components'
import background from '../img/background.jpg'
import { InnerLayout } from '../style/Layaouts';

function SortingAreaComponent() {


const [range, setRange] = useState(20);

//se crea un arreglo con cada porcentaje de left para cada valor del input range
let min = 29;
let aux = 2.8;
let porcentajesValue = {};
for (let i = 5; i <= 20; i++) {
    porcentajesValue[i]= min;
    min=min + aux;
}

//se crea un arreglo con cada porcentaje del width del div "progressBar" para cada valor del input range
let min1 = 17;
let aux2 = 5.3;
let porcentajesProgressBar = {};
for (let i = 5; i <= 20; i++) {
    porcentajesProgressBar[i]= min1;
    min1=min1 + aux2;
}

const setValueSpan = (a) => {
    const slideValue = document.getElementById("valueSpan");
    const progressBar = document.getElementById("progressBar");
    slideValue.style.left = porcentajesValue[a] + "%";
    progressBar.style.width = porcentajesProgressBar[a] + "%"
    slideValue.classList.add("show")

    setRange(a)

    setTimeout(() => {
        slideValue.classList.remove("show");
    }, 10000);
}


return (
    <SortingAreaComponentStyled style={{backgroundImage: `url(${background})` }}>
        <div className="content">
            <p className='title'>Algoritmos de ORDENAMIENTO</p>
            <button className='primaryButton primButton'>NUEVO ARREGLO</button>

            <InnerLayout>
                <div className="sorting-content">

                    <div className="content-controls">

                        {/* --------------------------------------------------- */}
                        <div className='size'>
                            <div className='black-t-i'></div>
                            <p className='sub-title'>Tamaño</p>
                            <div className="input-content">

                                <div className="sliderValue">
                                    <span id="valueSpan">{range}</span>
                                </div>
                                <div className="field">
                                    <div className="value left">5</div>
                                        <input type="range" name="input-range" id="inputRange" min="5" max="20" steps="1" onChange={(e) => {setValueSpan(e.target.value)}}  />
                                        <div id="progressBar"></div>
                                    <div className="value right">20</div>
                                    
                                </div>
                            </div>
                            <div className='black-t-s'></div>
                        </div>
                        {/* ------------------------------------------------- */}

                        <div className="color">
                            <div className='black-t-i'></div>
                                <p className='sub-title'>Color</p>
                            <div className='black-t-s'></div>
                        </div>

                    </div>

                    <div className="array-content">
                        <div className="array">
                        <div className='black-t-i'></div>
                            <p className='sub-title'>Arreglo</p>
                        <div className='black-t-s'></div>
                        </div>
                    </div>

                </div>
            </InnerLayout>

        </div>
    </SortingAreaComponentStyled>
)
}

const SortingAreaComponentStyled = styledComponents.div`
height: 160vh;
position: relative;
background-size: cover;
z-index: 1;
font-family: 'Oswald';

.content{
    text-align: center;
    z-index: 2;
    .title{
        font-size: 3rem;
        font-weight: 300;
        margin-bottom: 2rem;
        padding-top: 3rem;
    }
    .primButton{
        margin-bottom: 2rem;
    }

    .sorting-content{
        z-index: 2;
        color: #000;

        .sub-title{
            text-align: left;
            padding-top: .5rem;
            padding-left: 1rem;
            font-size: 1.5rem;
            text-decoration: underline;
        }


        .content-controls{
            display: flex;
            margin-bottom: 2rem;

            .size{
                width: 40%;
                height: 14rem;
                background-color: #FFF;
                margin-right: 2rem;

                position:relative;}

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

                        span.show{
                            transform: translateX(-50%) scale(1);
                        }

                        span:after{
                            position: absolute;
                            content: "";
                            height: 2.5rem;
                            width: 2.5rem;
                            background-color: #000;
                            transform: translateX(-50%) rotate(45deg);
                            line-height: 2.5rem;
                            left: 50%;
                            z-index: -1;
                            border-top-left-radius: 50%;
                            border-top-right-radius: 50%;
                            border-bottom-left-radius: 50%;
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
            }

            .color{
                width: 60%;
                height: 14rem;
                background-color: #FFF;

                position: relative;
            }

        }

        .array-content{
            display: flex;

            .array{
                width: 100%;
                height: 30rem;
                background-color: #FFF;
                position: relative;
            }
        }

    }
}



:before {
    content:'';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: -1;
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

export default SortingAreaComponent