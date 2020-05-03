import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import {SortableElement} from 'react-sortable-hoc'
const styles = {
    colorBox: {
        width: '20%',
        height: '25%',
        marginTop: '-6px',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        "&:hover svg": {
            color: 'white',
            transition: "all .2s ease-in-out",
            transform: 'scale(1.2)',
        }

    },
    boxContent: {
        position: 'absolute',
        padding: '10px',
        left: '0',
        bottom: '0',
        color: 'rgba(0,0,0,0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        
       
    },
    icon: {
        position: 'absolute',
        bottom: '0',
        margin: '5px',
        right: '0',
        fontSize: 20,
        color: 'rgba(0,0,0,0.7)',
        
        

    },
}
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