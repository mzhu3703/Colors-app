import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import MakeColorBox from './MakeColorBox';

//function that accepst the palettearray from parent and handleDelete prop
const DraggableContainer = SortableContainer(({paletteArray, handleDelete})=>{
    return(
        <div style = {{height: "100%"}} >
            {paletteArray.map((box,index) =>
                    <MakeColorBox index = {index} key = {box.name} color={box.color} name={box.name} handleDelete = {() => handleDelete(box.name)}/>)}
        </div>
    );
})

export default DraggableContainer