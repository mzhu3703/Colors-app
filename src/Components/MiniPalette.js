import React, {PureComponent} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '/home/michael/colors-app/colors-app/src/Styling/MiniPaletteStyles.js'
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';

//clickable boxes on front page. Parent is PaletteList
class MiniPalette extends PureComponent {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
   handleClick(evt){
        evt.stopPropagation();
        this.props.showDelete(this.props.id);
        // this.props.handleDelete(this.props.id);
   } 

   render(){
    const { classes} = this.props;
    const miniColorBoxes = this.props.palette.colors.map(color => (
        <div key={color.name} className={classes.miniColor} style={{ backgroundColor: color.color }} />
    ));
    return (
        <div className={classes.root} onClick={this.props.handleClick}>
            <div className={classes.colors}>
                {/* mini colorboxes */}
                {miniColorBoxes}
            </div>
                <DeleteSharpIcon className={classes.icon} onClick={this.handleClick} />
            <h5 className={classes.title}>
                {this.props.palette.id}
                <span>{this.props.palette.emoji}</span>
            </h5>

        </div>

    )
   }

}

export default withStyles(styles)(MiniPalette);