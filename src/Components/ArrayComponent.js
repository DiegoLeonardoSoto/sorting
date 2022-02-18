import React from 'react'
import styledComponents from 'styled-components'

function ArrayComponent() {
return (
    <ArrayComponentStyled>
    <div className='black-t-i'></div>
        <p className='sub-title'>Arreglo</p>
    <div className='black-t-s'></div>
    </ArrayComponentStyled>
)
}

const ArrayComponentStyled = styledComponents.div`
width: 100%;
height: 30rem;
background-color: #FFF;
position: relative;

`;

export default ArrayComponent