import React from 'react'
import styledComponents from 'styled-components'
import background from '../img/background.jpg'
import { InnerLayout } from '../style/Layaouts';
import ArrayComponent from './ArrayComponent';
import ColorComponent from './ColorComponent';
import SizeComponent from './SizeComponent';

function SortingAreaComponent() {

return (
    <SortingAreaComponentStyled style={{backgroundImage: `url(${background})` }}>
        <div className="content">
            <p className='title'>Algoritmos de ORDENAMIENTO</p>

            <InnerLayout>
                <div className="sorting-content">
                    <div className="content-controls">
                        <SizeComponent/>
                        <ColorComponent/>
                    </div>

                    <div className="array-content">
                        <ArrayComponent/>
                    </div>
                </div>
            </InnerLayout>

        </div>
    </SortingAreaComponentStyled>
)
}

const SortingAreaComponentStyled = styledComponents.div`
height: 140vh;
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
        padding-top: 1rem;
    }

    .sorting-content{
        z-index: 2;
        color: #000;

        .content-controls{
            display: flex;
            margin-bottom: 2rem;
        }

        .array-content{
            display: flex;
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


`;

export default SortingAreaComponent