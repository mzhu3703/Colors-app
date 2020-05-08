import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import {SortableElement} from 'react-sortable-hoc';
import styles from '/home/michael/colors-app/colors-app/src/Styling/MakeColorBoxStyles.js'

//Parent is PaletteForm. Component is each box that is created in the form
//function element accepts props and returns a react element
const MakeColorBox = SortableElement((props) =>{
    const { classes } = props
    return (
        <div className={classes.colorBox} style={{ background: props.color }} >
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                
            </div>
            <DeleteSharpIcon className={classes.icon} onClick={props.handleDelete} />
         
        </div>
    )
})


export default withStyles(styles)(MakeColorBox);