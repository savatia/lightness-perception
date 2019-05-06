import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import buildStylePropertyString from '../../node_modules/stylefire/lib/css/render';

const App = styled.div`
    background: linear-gradient(to right, black, white);
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Draggable = posed.div({
    draggable: 'x'
})

const Square = styled.div`
    height: 100px;
    width: 100px;
    position: absolute;
    top: 15px;
    left: ${ props => props.position == 'left' ? '15px' : 'auto' }
    right: ${ props => props.position == 'right' ? '15px' : 'auto' }
    background-color: rgb(127, 127, 127);
`;

const DragSquare =  styled(Draggable)`
    height: 100px;
    width: 100px;
    background-color: rgb(127, 127, 127);
    position: absolute;
    top: calc( 50% - 50px);
    margin: 15px;
    text-align: center;
    line-height: 100px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
`;

export default () => (
    <App>
        <Square position='left' />
        <Square position='right' />
        <DragSquare>Drag me!</DragSquare>
    </App>
)