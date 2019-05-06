import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const Draggable = posed.div({
    draggable: 'x',
    dragBounds: { left: '-100%', right: '100%'}
})

const Square =  styled(Draggable)`
    height: 100px;
    width: 100px;
`;


export default  ({color}) => (
    <Square style={{backgroundColor: color}} />
)