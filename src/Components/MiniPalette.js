import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '/home/michael/colors-app/colors-app/src/Styling/MiniPaletteStyles.js'

//clickable boxes on front page. Parent is PaletteList
function MiniPalette(props) {
    const { classes } = props;
    const miniColorBoxes = props.palette.colors.map(color => (
        <div key={color.name} className={classes.miniColor} style={{ backgroundColor: color.color }} />
    ))
    return (
        <div className={classes.root} onClick = {props.handleClick}>
            <div className={classes.colors}>
                {/* mini colorboxes */}
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {props.palette.id}
                <span>{props.palette.emoji}</span>
            </h5>

        </div>

    )

}

export default withStyles(styles)(MiniPalette);