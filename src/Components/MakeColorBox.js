import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    colorBox: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',

    },
}
//Parent is PaletteForm. Component is each box that is created in the form
class MakeColorBox extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.colorBox} style={{ background: this.props.color }}>{this.props.color} {this.props.name}</div>
        )
    }
}

export default withStyles(styles)(MakeColorBox);