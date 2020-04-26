import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer",
        }

    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden",
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 0,
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"

    },
    emoji: {

    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    }
}

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